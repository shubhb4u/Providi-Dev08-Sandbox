import { LightningElement, track, wire } from 'lwc';
import { useCheckoutComponent, CheckoutInformationAdapter, placeOrder, postAuthorizePayment, authorizePayment } from "commerce/checkoutApi";
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { refreshCartSummary } from "commerce/cartApi";
import { refreshApex } from '@salesforce/apex';
import { NavigationMixin } from 'lightning/navigation';

import getCartItems from '@salesforce/apex/StripePaymentHelper.getCartItems';
import sendPaymentRequest from '@salesforce/apex/StripePaymentHelper.sendPaymentRequest';
import createMetadataRecord from '@salesforce/apex/StripePaymentHelper.createMetadataRecord';

import preAuthorizeAlternatePayment from '@salesforce/apex/AlternativePaymentController.preAuthorize';
// import authorizePayment from '@salesforce/apex/AlternativePaymentController.authorizePayment';
import getPaymentGateway from '@salesforce/apex/PreAuthorizeAlternativePayment.getPaymentMethodGateway';
import getAltpayMetodInfo from '@salesforce/apex/PreAuthorizeAlternativePayment.getAltpayMet';
import communityId from '@salesforce/community/Id';

import updatePaymentInstrument from '@salesforce/apex/AlternativePaymentController.updatePaymentInstrument';



const CheckoutStage = {
    CHECK_VALIDITY_UPDATE: 'CHECK_VALIDITY_UPDATE',
    REPORT_VALIDITY_SAVE: 'REPORT_VALIDITY_SAVE',
    BEFORE_PAYMENT: 'BEFORE_PAYMENT',
    PAYMENT: 'PAYMENT',
    BEFORE_PLACE_ORDER: 'BEFORE_PLACE_ORDER',
    PLACE_ORDER: 'PLACE_ORDER'
};

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


    handleInputChange(event) {
        const { name, value } = event.target;
        this.paymentData[name] = value;
    }

    @wire(CheckoutInformationAdapter, {})
    checkoutInfo({ error, data }) {
        if (data) {
            // console.log("Data received from checkout Information adapter -->> : ", JSON.parse(JSON.stringify(data)));
            this.checkoutId = data.checkoutId;
            this.cartSummary = data.cartSummary;
            this.cartId = data.cartSummary.cartId;
            this.deliveryAddress = data.deliveryGroups?.items[0].deliveryAddress;
            this.paymentData.amount = data.cartSummary.grandTotalAmount;
            this.orderRefNum = data.orderReferenceNumber;
            // console.log('cartId -->> '+ this.cartId);
            // console.log('this.deliveryAddress -->> '+ JSON.stringify(this.deliveryAddress));
            if (this.cartId) {
                this.getCartitemsInfo();
            }

        } else if (error) {
            console.error("Error fetching checkout information: ", JSON.stringify(error));
            // Optionally, display an error message to the user
        }
    }


    getAlterPaymentMethod(){
        getAltpayMetodInfo({cartId: this.cartId})
        .then((result) => {
            console.log('result --- ' + JSON.stringify(result));
        })
        .catch((error) => {
            console.log('Error fetching alt payment -- '+ JSON.stringify(error));
        })
    }



    connectedCallback() {
        this.webstoreId = communityId;
        // console.log('Webstore ID: ', this.webstoreId);
    }


    //For Quest review details page
    getCartitemsInfo() {
        if (this.cartId)
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


    async placedOrder() {

        // let wire = await postAuthorizePayment(this.checkoutId,  '001_token_PostAuth', this.shippingAddress,
        //  {"ProcessingMode": "External","status":"Active","GatewayToken":"mHkDsh0oIA3mnWjo9UL","NickName" : "Wire"});

        //  let wire = await postAuthorizePayment(this.checkoutId , this.alternatePaymentMet,  this.shippingAddress );
        // console.log('wire-->> ' + JSON.stringify(wire));

        // let wire = await authorizePayment(this.checkoutId,  '001_token_Auth', this.shippingAddress);

        // console.log('wire-->> ' + JSON.stringify(wire));
        try {
            const orderConfirmation = await placeOrder();

            // console.log('Wire orderReferenceNumber: ' + orderConfirmation);

            if (orderConfirmation.orderReferenceNumber) {
                this.orderRefNumber = orderConfirmation.orderReferenceNumber;
                // console.log('Wire orderReferenceNumber: ' + orderConfirmation.orderReferenceNumber);

                refreshCartSummary();
                this.navigateToOrderConfirmationWithOrderReff(orderConfirmation.orderReferenceNumber);

            } else {
                throw new Error("Required orderReferenceNumber is missing");
            }
        } catch (error) {
            console.log('error place order -->. ' + JSON.stringify(error));
        }

    }

    //Added by Ankit

    updatePaymentInstrument() {
        updatePaymentInstrument({ cartId: this.cartId }).then((data) => {

            if (data) {
                // console.log('Payment instrument updated successfully. PlacedOrder called -->> ', data);
                this.placedOrder();

            }

        }).catch(error => {
            console.log('reviewCartDetails- updatePaymentInstrument', JSON.stringify(error));
        });
    }

    async callPostAuth(paymentId, billingAddress) {
        const paymentResult = await postAuthorizePayment(this.checkoutId, paymentId, billingAddress, { cartId: this.cartId });
        // console.log('postAuthorizePayment-->>', paymentResult);
        // console.log('gatewayResponse-->>', paymentResult.gatewayResponse);
        // console.log('paymentMethod-->>', paymentResult.paymentMethod);

        this.getAlterPaymentMethod();

        // console.log('cartSummary after refresh Apex-->> ' + JSON.stringify(this.cartSummary));
        if (paymentResult.salesforceResultCode == 'Success') {
            this.updatePaymentInstrument();
            // this.placedOrder();
            // console.log('paymentResult.salesforceResultCode-->> ' + paymentResult.salesforceResultCode);
        }
    }

    async preAuthorizePayment() {
        // console.log('authorizePayment called-->> ');
        await preAuthorizeAlternatePayment({
            country: this.deliveryAddress.country,
            postalCode: this.deliveryAddress.postalCode,
            region: this.deliveryAddress.region,
            city: this.deliveryAddress.city,
            street: this.deliveryAddress.street,
            cartId: this.cartId,
            paymentMethod: this.paymentMethod ? this.paymentMethod : ''
        }).then(response => {
            // authorization is complete, move to complete the order
            // console.log('Cart Summary after Auth call ->> ' + JSON.stringify(response));
            // console.log('Raw response:', response);

            // Ensure the response is an object
            if (typeof response === 'string') {
                response = JSON.parse(response);
                // console.log('Parsed response:', response);
            }

            // Assign response directly to this.alternatePaymentMet
            this.alternatePaymentMet = response;

            // Log alternatePaymentMet after assignment
            // console.log('this.alternatePaymentMet:', this.alternatePaymentMet);

            // Extract GatewayToken
            const paymentToken = response.GatewayToken;
            // console.log('Extracted paymentToken:', paymentToken);
            // refreshApex(this.cartSummary);

            this.getAlterPaymentMethod();

            // Check if paymentToken exists
            if (paymentToken) {
                setTimeout(() => {
                    this.callPostAuth(paymentToken, this.shippingAddress);
                }, 3000);
            } else {
                console.error('GatewayToken is missing from the response:', response);
            }
            // this.placedOrder();

            return true;
        }).catch(error => {
            return false;
        });
    }

    handleWireAchPayment() {
        this.paymentMethod = 'Wire ACH Stripe';
    }

    async handlePay() {

        try {
            this.paymentMethod = 'Wire ACH Stripe';
            const result = await sendPaymentRequest({ productsJson: JSON.stringify(this.records) });
            this.isProcess = false;
            // console.log('result:-->> ', JSON.parse(JSON.stringify(result)));
            this.paymentUrlAvailable = true;
            this.paymentURL = result.url;
            this.paymentId = result.id;
            // console.log('Payment URL:-->> ', this.paymentURL);
                this.handleCreateMetadataRecord();
            
            return true;
        } catch (error) {
            console.error('Error during payment handling: -->>', error);
            this.isProcess = false;
            this.isDisabled = false;
            return false;
        }

    }

    stageAction(checkoutStage) {
        switch (checkoutStage) {
            case CheckoutStage.CHECK_VALIDITY_UPDATE:
                return Promise.resolve(this.checkValidity());
            case CheckoutStage.REPORT_VALIDITY_SAVE:
                return Promise.resolve(this.reportValidity());
            case CheckoutStage.BEFORE_PAYMENT:
                return this.handlePay(); // Ensure handlePay resolves properly
            case CheckoutStage.PAYMENT:
                return this.preAuthorizePayment(); // Ensure authorizePayment resolves properly
            default:
                return Promise.resolve(true);
        }
    }


    /**
     * Return true when terms checkoutbox is checked
     */
    checkValidity() {
        // console.log('Wire checkValidity');
        return true;
    }

    /**
     * Return true when terms checkoutbox is checked
     */
    reportValidity() {
        // console.log('Wire reportValidity');
        /* this.dispatchUpdateErrorAsync({
            groupId: 'Payment',
            type: '/commerce/errors/checkout-failure',
            exception: 'Purchase number must be filled in.',
        }); */

        return true;
    }


    navigateToOrderConfirmationWithOrderReff(orderReffNo) {
        // Navigate to the order confirmation page
        this[NavigationMixin.Navigate]({
            type: 'standard__webPage',
            attributes: {
                url: `/order?orderNumber=${orderReffNo}` // Updated URL with query parameter
            }
        });
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }

    async handleCreateMetadataRecord() {
        try {
            // Validate input
            if (!this.orderRefNum ) {
                this.showToast('Error', 'Order Reference Number and Payment Link are required', 'error');
                return;
            }

            await createMetadataRecord({ orderRefNumber: this.orderRefNum , paymentUrl: this.paymentURL, paymentId: this.paymentId });
            this.showToast('Success', 'Metadata record created successfully!', 'success');
        } catch (error) {
            console.error('Error creating metadata record:', error);
            this.showToast('Error', 'Failed to create metadata record', 'error');
        }
    }

}