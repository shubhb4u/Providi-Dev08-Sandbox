import { LightningElement, api, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { loadScript } from 'lightning/platformResourceLoader';
import microformScript from '@salesforce/resourceUrl/CybersourceMicroform';
import communityId from '@salesforce/community/Id';
import { getSessionContext } from 'commerce/contextApi';
import { useCheckoutComponent, CheckoutInformationAdapter, simplePurchaseOrderPayment, postAuthorizePayment, placeOrder } from 'commerce/checkoutApi';
import getStateOptions from '@salesforce/apex/CybersourceController.getStateOptions';
import generateKey from '@salesforce/apex/CybersourceController.generateKey';
import authorizeCard from '@salesforce/apex/CybersourceController.authorizeCard';
import { CartSummaryAdapter, refreshCartSummary } from 'commerce/cartApi';
import updatePaymentInstrument from '@salesforce/apex/CybersourceController.updatePaymentInstrument';
import preAuthorizeAlternatePayment from '@salesforce/apex/AlternativePaymentController.preAuthorize';



// Error Constants
const NAME_ERROR = 'Name fields are required';
const ADDRESS_ERROR = 'Address fields are required';
const CARD_EXPIRED_ERROR = 'Credit Card is expired';
const CARD_INVALID_ERROR = 'Invalid Card Number';
const CVV_INVALID_ERROR = 'Invalid Security Code';

const CheckoutStage = {
    CHECK_VALIDITY_UPDATE: 'CHECK_VALIDITY_UPDATE',
    REPORT_VALIDITY_SAVE: 'REPORT_VALIDITY_SAVE',
    BEFORE_PAYMENT: 'BEFORE_PAYMENT',
    PAYMENT: 'PAYMENT',
    BEFORE_PLACE_ORDER: 'BEFORE_PLACE_ORDER',
    PLACE_ORDER: 'PLACE_ORDER'
};


export default class CustomPO extends NavigationMixin(useCheckoutComponent(LightningElement)) {

    isLoading = false;
    firstLoad = false;

    @track checkoutId;
    @track shippingAddress;
    @track showError = false;
    @track error;

    @api headerLabel;
    @api inputLabel;
    @api placeholderLabel;
    @api hideHeading = false;
    poNumber;
    GatewayToken;

    handlePONumber(event) {
        this.poNumber = event.target.value;
    }

    /**
     * update form when our container asks us to
     */
    stageAction(checkoutStage /*CheckoutStage*/) {
        switch (checkoutStage) {
            case CheckoutStage.CHECK_VALIDITY_UPDATE:
                return Promise.resolve(this.checkValidity());
            case CheckoutStage.REPORT_VALIDITY_SAVE:
                return Promise.resolve(this.reportValidity());
            case CheckoutStage.PAYMENT:
                return Promise.resolve(this.paymentProcess());
            default:
                return Promise.resolve(true);
        }
    }


    @wire(CheckoutInformationAdapter, {})
    checkoutInfo({ error, data }) {
        if (!this.isInSitePreview()) {
            console.log('PO checkoutInfo');
            if (data) {
                this.checkoutId = data.checkoutId;
                this.cartId = data.cartSummary?.cartId;
                this.deliveryAddress = data.deliveryGroups?.items[0].deliveryAddress;
                this.grandTotalAmount = data.cartSummary?.grandTotalAmount;
                console.log('PO  checkoutInfo: ' + JSON.stringify(data));
                this.shippingAddress = data.deliveryGroups?.items[0].deliveryAddress;

            } else if (error) {
                console.log('##cybersourcePayment checkoutInfo Error: ' + error);
            }
        }
    }

    async connectedCallback() {
        this.currentCommunityId = communityId;

        getSessionContext().then(ctx => {
            console.log(ctx);
            this.effectiveAccountId = ctx.effectiveAccountId;
        }).catch(err => {
            console.log('Error getting Session Context:', err);
        });
    }


    @api
    reportValidity() {
        console.log('simplePurchaseOrder: in reportValidity');
        const purchaseOrderInput = this.poNumber;
        let isValid = false;

        if (purchaseOrderInput) {
            console.log('simplePurchaseOrder purchaseOrderInput: ' + JSON.stringify(purchaseOrderInput));
            isValid = true;
            this.showError = false;
        } else {
            console.log('simplePurchaseOrder purchaseOrderInput not found: ' + JSON.stringify(purchaseOrderInput));
            this.showError = true;
            this.error = "Please enter a purchase order number.";
        }
        return isValid;
    }

    @api
    async paymentProcess() {
        console.log('simplePurchaseOrder: in checkout save');

        if (!this.reportValidity()) {
            throw new Error('Required data is missing');
        }

        const createAltPayment = await this.preAuthorizePayment();

        const comPay = await this.completePayment();
        const altPay = await this.updatePaymentInformation();

        // setTimeout(async () => {
        //     const orderConfirmation = await placeOrder();
        //     console.log('orderConfirmation-->> ' + orderConfirmation);

        // }, 3000);


        // if (orderConfirmation.orderReferenceNumber) {
        //     refreshCartSummary();
        //     this.navigateToOrder(orderConfirmation.orderReferenceNumber);
        //     console.log('simplePurchaseOrder orderReferenceNumber: '+orderConfirmation.orderReferenceNumber);
        // } else {
        //     throw new Error("Required orderReferenceNumber is missing");
        // }
    }

    @api
    async completePayment() {
        let address = this.shippingAddress;
        const purchaseOrderInputValue = this.poNumber;

        let po = await simplePurchaseOrderPayment(this.checkoutId, purchaseOrderInputValue, address);
        console.log('po authorized -->> ' + JSON.stringify(po));
        return po;
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
            paymentMethod: 'Purchase Order Stripe'
        }).then(response => {

            // Ensure the response is an object
            if (typeof response === 'string') {
                response = JSON.parse(response);
                // console.log('Parsed response:', response);
            }

            // Assign response directly to this.alternatePaymentMet
            this.alternatePaymentMet = response;
            console.log('this.alternatePaymentMet:-->> ', this.alternatePaymentMet);

            // Extract GatewayToken
            this.GatewayToken = response.GatewayToken;
            // this.getAlterPaymentMethod();

            return paymentToken;
        }).catch(error => {
            return error;
        });
    }

    @api
    async updatePaymentInformation() {
        console.log('Inside updatePaymentInformation entry');

        try {
            let altPayment = await updatePaymentInstrument({ cartId: this.cartId, gatewayToken: this.GatewayToken });
            console.log('altPayment-->> ' + altPayment);
            return altPayment;

        } catch (error) {
            console.log('error during alt payment update -->> ' + error);
            return error;
        }

    }

    isInSitePreview() {
        let url = document.URL;

        return (
            url.indexOf("sitepreview") > 0 ||
            url.indexOf("livepreview") > 0 ||
            url.indexOf("live-preview") > 0 ||
            url.indexOf("live.") > 0 ||
            url.indexOf(".builder.") > 0
        );
    }

    navigateToOrder(orderNumber) {
        this[NavigationMixin.Navigate]({
            type: "comm__namedPage",
            attributes: {
                name: "Order"
            },
            state: {
                orderNumber: orderNumber
            }
        });
    }

}