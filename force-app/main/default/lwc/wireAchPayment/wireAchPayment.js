import { LightningElement, track, wire } from 'lwc';
import { useCheckoutComponent, CheckoutInformationAdapter, placeOrder, postAuthorizePayment, authorizePayment } from "commerce/checkoutApi";
import { refreshCartSummary } from "commerce/cartApi";
import { NavigationMixin } from 'lightning/navigation';
import getCartItems from '@salesforce/apex/StripePaymentHelper.getCartItems';
import sendPaymentRequest from '@salesforce/apex/StripePaymentHelper.sendPaymentRequest';
import createMetadataRecord from '@salesforce/apex/StripePaymentHelper.createMetadataRecord';
import preAuthorizeAlternatePayment from '@salesforce/apex/AlternativePaymentController.preAuthorize';
// import getAltpayMetodInfo from '@salesforce/apex/PreAuthorizeAlternativePayment.getAltpayMet';
import communityId from '@salesforce/community/Id';
import updatePaymentInstrument from '@salesforce/apex/AlternativePaymentController.updatePaymentInstrument';

// const CheckoutStage = {
//     CHECK_VALIDITY_UPDATE: 'CHECK_VALIDITY_UPDATE',
//     REPORT_VALIDITY_SAVE: 'REPORT_VALIDITY_SAVE',
//     BEFORE_PAYMENT: 'BEFORE_PAYMENT',
//     PAYMENT: 'PAYMENT',
//     BEFORE_PLACE_ORDER: 'BEFORE_PLACE_ORDER',
//     PLACE_ORDER: 'PLACE_ORDER'
// };

export default class WireAchPayment extends NavigationMixin(useCheckoutComponent(LightningElement)) {
    @track isProcessing = false;
    @track paymentData = {
        accountHolderName: '',
        routingNumber: '',
        accountNumber: '',
        amount: ''
    };
    error;
    records;
    totalPrice = 0;
    recordId;
    isProcess = false;
    isDisabled = false;
    cartId;
    isWire = false;
    @track paymentURL;
    paymentUrlAvailable = false;
    @track deliveryAddress;
    checkoutId;
    @track cartSummary;
    currentCommunityId;
    orderRefNum;
    shippingAddress = {
        "name": "Quest B2B Test User",
        "street": "5245 Hunters Ridge Rd",
        "city": "Fort Worth",
        "region": "TX",
        "country": "US",
        "postalCode": "76132-1842"
    };
    paymentMethod = '';
    webstoreId;
    orderSummaryId;
    paymentGateId;
    orderRefNumber;
    alternatePaymentMet;
    isPO;
    isCreditCard;
    @track errorMessages;

    handleInputChange(event) {
        const { name, value } = event.target;
        this.paymentData[name] = value;
    }

    @wire(CheckoutInformationAdapter, {})
    checkoutInfo({ error, data }) {
        if (data) {
            this.checkoutId = data.checkoutId;
            this.cartSummary = data.cartSummary;
            this.cartId = data.cartSummary.cartId;
            this.deliveryAddress = data.deliveryGroups?.items[0].deliveryAddress;
            this.paymentData.amount = data.cartSummary.grandTotalAmount;
            this.orderRefNum = data.orderReferenceNumber;
            if (this.cartId) {
                this.getCartitemsInfo();
            }
        } else if (error) {
            console.error("Error fetching checkout information: ", JSON.stringify(error));
        }
    }

    getCartitemsInfo() {
        if (this.cartId) {
            getCartItems({ parentId: this.cartId })
                .then((result) => {
                    this.records = result;
                    // console.log('records  from carti items->> ' + JSON.stringify(this.records));
                    this.totalPrice = 'Pay($' + result.reduce((sum, rec) => sum + rec.TotalPrice, 0) + ')';
                })
                .catch((error) => {
                    console.error('Error: ', error);
                });
        }
    }

    connectedCallback() {
        this.webstoreId = communityId;
    }

    checkValidity() {
        return true;
    }

    reportValidity() {

        if (this.isCreditCard) {
            this.errorMessages = [];
            let isValid = true;
            let isShippingValid = this.validateShippingAddress();
            isValid = isValid && this.checkValidity();
            if (!isShippingValid) {
                this.errorMessages.push('Please select a valid Shipping Address');
            }
            return isValid && isShippingValid && this.errorMessages.length < 1;

        } else if (this.isPO) {
            const purchaseOrderInput = this.generatedPONumber;
            let isValid = false;

            if (purchaseOrderInput) {
                isValid = true;
                this.showError = false;
            } else {
                this.showError = true;
                this.error = "Please enter a purchase order number.";
            }
            return isValid;
        }
    }

    async handlePay() {

        if (!this.reportValidity()) {
            throw new Error('Required data is missing');
        }
        if (this.isCreditCard) {
            // this.createTransientToken(); Replace with Credit card code later when available
        } else if (this.isPO) {
            // const createAltPayment = await this.preAuthorizePayment(); Replace with Purchase Order code later when available
        } else {
            try {
                this.paymentMethod = 'Wire ACH Stripe';
                const result = await sendPaymentRequest({ productsJson: JSON.stringify(this.records) });
                this.paymentUrlAvailable = true;
                this.paymentURL = result.url;
                this.paymentId = result.id;
                this.handleCreateMetadataRecord();
                const authorizePayment = await this.preAuthorizePayment();
            } catch (error) {
                console.error('Error during payment handling: -->>', error);
            }
        }
    }

    async preAuthorizePayment() {
        await preAuthorizeAlternatePayment({
            country: this.deliveryAddress.country,
            postalCode: this.deliveryAddress.postalCode,
            region: this.deliveryAddress.region,
            city: this.deliveryAddress.city,
            street: this.deliveryAddress.street,
            cartId: this.cartId,
            paymentMethod: this.paymentMethod ? this.paymentMethod : ''
        }).then(response => {
            console.log('Cart Summary after Auth call ->> ' + JSON.stringify(response));
            if (typeof response === 'string') {
                response = JSON.parse(response);
                console.log('Parsed response:', response);
            }
            const paymentToken = response.GatewayToken;
            // this.getAlterPaymentMethod();

            // Check if paymentToken exists
            if (paymentToken) {
                setTimeout(() => {
                    this.callPostAuth(paymentToken, this.deliveryAddress, this.paymentMethod);
                }, 3000);
            } else {
                console.error('GatewayToken is missing from the response:', response);
            }
            return true;
        }).catch(error => {
            return false;
        });
    }

    async callPostAuth(paymentId, billingAddress, paymentMethod) {
        const paymentResult = await postAuthorizePayment(this.checkoutId, paymentId, billingAddress, { paymentMethod: this.paymentMethod });
        console.log('postAuthorizePayment-->>', paymentResult);
        // this.getAlterPaymentMethod();
        if (paymentResult.salesforceResultCode == 'Success') {
            this.updatePaymentInstrument();
        }
    }

    updatePaymentInstrument() {
        updatePaymentInstrument({ cartId: this.cartId }).then((data) => {
            if (data) {
                this.placedOrder();
            }
        }).catch(error => {
            console.log('reviewCartDetails- updatePaymentInstrument', JSON.stringify(error));
        });
    }

    async placedOrder() {

        try {
            const orderConfirmation = await placeOrder();
            console.log('Wire orderReferenceNumber: ' + orderConfirmation);
            if (orderConfirmation.orderReferenceNumber) {
                this.orderRefNumber = orderConfirmation.orderReferenceNumber;
                refreshCartSummary();
                this.navigateToOrderConfirmationWithOrderReff(orderConfirmation.orderReferenceNumber);
            } else {
                throw new Error("Required orderReferenceNumber is missing");
            }
        } catch (error) {
            console.log('error place order -->. ' + JSON.stringify(error));
        }
    }

    // getAlterPaymentMethod() {
    //     getAltpayMetodInfo({ cartId: this.cartId })
    //         .then((result) => {
    //             console.log('result --- ' + JSON.stringify(result));
    //         })
    //         .catch((error) => {
    //             console.log('Error fetching alt payment -- ' + JSON.stringify(error));
    //         })
    // }

    async handleCreateMetadataRecord() {
        try {
            // Validate input
            if (!this.orderRefNum) {
                this.showToast('Error', 'Order Reference Number and Payment Link are required', 'error');
                return;
            }
            await createMetadataRecord({ orderRefNumber: this.orderRefNum, paymentUrl: this.paymentURL, paymentId: this.paymentId });
            this.showToast('Success', 'Metadata record created successfully!', 'success');
        } catch (error) {
            console.error('Error creating metadata record:', error);
            this.showToast('Error', 'Failed to create metadata record', 'error');
        }
    }

    handleWireAchPayment() {
        this.paymentMethod = 'Wire ACH Stripe';
    }

    // stageAction(checkoutStage) {
    //     switch (checkoutStage) {
    //         case CheckoutStage.CHECK_VALIDITY_UPDATE:
    //             return Promise.resolve(this.checkValidity());
    //         case CheckoutStage.REPORT_VALIDITY_SAVE:
    //             return Promise.resolve(this.reportValidity());
    //         case CheckoutStage.BEFORE_PAYMENT:
    //             return this.handlePay();
    //         case CheckoutStage.PAYMENT:
    //             return this.preAuthorizePayment();
    //         default:
    //             return Promise.resolve(true);
    //     }
    // }

    navigateToOrderConfirmationWithOrderReff(orderReffNo) {
        // Navigate to the order confirmation page
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: `/order?orderNumber=${orderReffNo}`
            }
        });
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
}