import { LightningElement, wire,api, track } from 'lwc';
import communityId from '@salesforce/community/Id';
import { useCheckoutComponent, CheckoutInformationAdapter, placeOrder, postAuthorizePayment, authorizePayment } from "commerce/checkoutApi";


// Error Constants
const NAME_ERROR = 'Name fields are required';
const ADDRESS_ERROR = 'Address fields are required';
const CARD_EXPIRED_ERROR = 'Credit Card is expired';
const CARD_INVALID_ERROR = 'Invalid Card Number';
const CVV_INVALID_ERROR = 'Invalid Security Code';

export default class CreditCardStripe extends LightningElement {

    @api checkoutDetails;
    
    _checkoutMode = 1;
    transientToken;
    microform;
    paymentData  = {
        cardNumber: '',
        cvv: '',
        expMonth: '01',
        expYear: '2025'
    }
    monthOptions = [
        { label: '01', value: '01' },
        { label: '02', value: '02' },
        { label: '03', value: '03' },
        { label: '04', value: '04' },
        { label: '05', value: '05' },
        { label: '06', value: '06' },
        { label: '07', value: '07' },
        { label: '08', value: '08' },
        { label: '09', value: '09' },
        { label: '10', value: '10' },
        { label: '11', value: '11' },
        { label: '12', value: '12' }
    ];
    yearOptions = [];

    effectiveAccountId;
    // cartAmount = 0.00;

    @track checkoutId;
    @track shippingAddress;
    @track errorMessages = [];
    @track billingAddress;
    @track grandTotalAmount;
    cartSummary;
    cartId;

    @wire(CheckoutInformationAdapter, {})
    checkoutInfo({ error, data }) {
        if (data) {
            console.log("Data received from checkout Information adapter -->> : ", JSON.parse(JSON.stringify(data)));
            this.checkoutId = data.checkoutId;
            this.cartSummary = data.cartSummary;
            this.cartId = data.cartSummary.cartId;
            this.deliveryAddress = data.deliveryGroups?.items[0].deliveryAddress;

        } else if (error) {
            console.error("Error fetching checkout information: ", JSON.stringify(error));
        }
    }


    connectedCallback(){

        this.currentCommunityId = communityId;
        const currentYear = new Date().getFullYear();
        this.paymentData.expYear = ''+currentYear;
        for (let i = 0; i < 25; i++) {
            const yearString = '' + (currentYear + i);
            this.yearOptions.push({ label: yearString, value: yearString });
        }
    }

    handleInputChange(event) {
        console.log('event.target ==>>' + JSON.parse(JSON.stringify(event.target)));
        const { name, value } = event.target;
        this.paymentData[name] = value;
    }


}