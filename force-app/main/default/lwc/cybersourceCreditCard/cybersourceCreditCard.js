import { LightningElement, api, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { loadScript } from 'lightning/platformResourceLoader';
import microformScript from '@salesforce/resourceUrl/CybersourceMicroform';
import communityId from '@salesforce/community/Id';
import { getSessionContext } from 'commerce/contextApi';
import { useCheckoutComponent, CheckoutInformationAdapter, postAuthorizePayment,placeOrder } from 'commerce/checkoutApi';
import getStateOptions from '@salesforce/apex/CybersourceController.getStateOptions';
import generateKey from '@salesforce/apex/CybersourceController.generateKey';
import authorizeCard from '@salesforce/apex/CybersourceController.authorizeCard';
import { CartSummaryAdapter, refreshCartSummary } from 'commerce/cartApi';
import updatePaymentInstrument from '@salesforce/apex/CybersourceController.updatePaymentInstrument';


// Error Constants
const NAME_ERROR = 'Name fields are required';
const ADDRESS_ERROR = 'Address fields are required';
const CARD_EXPIRED_ERROR = 'Credit Card is expired';
const CARD_INVALID_ERROR = 'Invalid Card Number';
const CVV_INVALID_ERROR = 'Invalid Security Code';



export default class CybersourceCreditCard extends NavigationMixin(useCheckoutComponent(LightningElement)) {
    @api checkoutDetails;

    _checkoutMode = 1;
    transientToken;
    microform;
    firstName = '';
    lastName = '';
    nickname = '';
    street = '';
    city = '';
    state = '';
    postalCode = '';
    expMonth = '01';
    expYear = '2023';
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
    stateOptions = [];

    effectiveAccountId;
    // cartAmount = 0.00;

    @track checkoutId;
    @track shippingAddress;
    @track errorMessages = [];
    @track billingAddress;
    @track grandTotalAmount;
    paymentId;
    cartId;


    stageAction(checkoutStage) {

        console.log('checkoutStage: ' + checkoutStage);
        switch (checkoutStage) {
            case 'CHECK_VALIDITY_UPDATE':
                return Promise.resolve(this.checkValidity());
            case 'REPORT_VALIDITY_SAVE':
                return Promise.resolve(this.reportValidity());
            case 'BEFORE_PAYMENT':
                return Promise.resolve(this.createTransientToken());
            case 'PAYMENT':
                    return Promise.resolve(this.authPayment());
            case 'BEFORE_PLACE_ORDER':
                return Promise.resolve(this.updatePaymentInformation());
            default:
                return Promise.resolve(true);
        }
    }

    /**
     * 
     * Get the CheckoutData from the standard salesforce adapter
     * Response is expected to be 202 while checkout is starting
     * Response will be 200 when checkout start is complete and we can being processing checkout data 
     */
    @wire(CheckoutInformationAdapter, {})
    checkoutInfo({ error, data }) {
        if (!this.isInSitePreview()) {
            console.log('cybersourcePayment checkoutInfo');
            if (data) {
                this.checkoutId = data.checkoutId;
                this.cartId = data.cartSummary.cartId;
                console.log('cybersourcePayment checkoutInfo checkoutInfo: ' + JSON.stringify(data));
                this.shippingAddress = data.deliveryGroups.items[0].deliveryAddress;
                if (data.checkoutStatus == 200) {
                    console.log('cybersourcePayment checkoutInfo checkoutInfo 200');
                }
            } else if (error) {
                console.log('##cybersourcePayment checkoutInfo Error: ' + error);
            }
        }
    }

    // retrieve the cart summary information
    @wire(CartSummaryAdapter, {})
    cartSummary({ error, data }) {
        if (!this.isInSitePreview()) {
            if (data) {
                this.grandTotalAmount = data.grandTotalAmount;
            } else if (error) {
                console.log('##cybersourcePayment checkoutInfo Error: ' + error);
            }
        }
    }

    async connectedCallback() {
        this.currentCommunityId = communityId;
        // populate this.yearOptions
        const currentYear = new Date().getFullYear();
        this.expYear = '' + currentYear;
        for (let i = 0; i < 15; i++) {
            const yearString = '' + (currentYear + i);
            this.yearOptions.push({ label: yearString, value: yearString });
        }

        getStateOptions()
            .then(res => {
                this.stateOptions = (res || []).map(state => { return { label: state.State_Name__c, value: (state.Abbreviation__c + ':' + state.Country_Code__r.Alpha2Code__c) }; });
            })
            .catch(err => {
                console.log(err);
            })

        getSessionContext().then(ctx => {
            console.log(ctx);
            this.effectiveAccountId = ctx.effectiveAccountId;
        }).catch(err => {
            console.log('Error getting Session Context:', err);
        });

        await loadScript(this, microformScript)
            .then(() => {
                this.setupMicroform();
            }).catch(err => {
                console.log(err);
            });
    }

    // create the Cybersource form and add the fields
    setupMicroform() {
        generateKey().then(res => {
            const flex = new Flex(res);
            const microform = flex.microform({ 'iframe': { 'line-height': '1.875rem' } });
            const number = microform.createField('number');
            const securityCode = microform.createField('securityCode', { maxLength: 4 });
            const numberElement = this.template.querySelector('.number-container');
            const securityCodeElement = this.template.querySelector('.securityCode-container');
            number.load(numberElement);
            securityCode.load(securityCodeElement);
            this.microform = microform;
        })
            .catch(err => {
                console.log('err from setup microform -->> ' + err);
            });
    }


    handleFirstNameChange(event) {
        this.firstName = event.target.value;
    }

    handleFirstNameBlur(event) {
        this.firstName = event.target.value.trim();
        if (this.firstName && this.lastName) {
            this.errorMessages = this.errorMessages.filter(m => m != NAME_ERROR);
        }
    }

    handleLastNameChange(event) {
        this.lastName = event.target.value;
    }

    handleLastNameBlur(event) {
        this.lastName = event.target.value.trim();
        if (this.firstName && this.lastName) {
            this.errorMessages = this.errorMessages.filter(m => m != NAME_ERROR);
        }
    }

    handleStreetChange(event) {
        this.street = event.target.value;
    }

    handleStreetBlur(event) {
        this.street = event.target.value.trim();
        if (this.isCCAddressValid()) {
            this.errorMessages = this.errorMessages.filter(m => m != ADDRESS_ERROR);
        }
    }

    handleCityChange(event) {
        this.city = event.target.value;
    }

    handleCityBlur(event) {
        this.city = event.target.value.trim();
        if (this.isCCAddressValid()) {
            this.errorMessages = this.errorMessages.filter(m => m != ADDRESS_ERROR);
        }
    }

    handleStateChange(event) {
        this.state = event.target.value;
    }

    handleStateBlur(event) {
        this.state = event.target.value.trim().toLocaleUpperCase();
        if (this.isCCAddressValid()) {
            this.errorMessages = this.errorMessages.filter(m => m != ADDRESS_ERROR);
        }
    }

    handlePostalCodeChange(event) {
        this.postalCode = event.target.value;
    }

    handlePostalCodeBlur(event) {
        this.postalCode = event.target.value.trim();
        if (this.isCCAddressValid()) {
            this.errorMessages = this.errorMessages.filter(m => m != ADDRESS_ERROR);
        }
    }

    isCCAddressValid() {
        let isValid = this.street.length > 0 && this.city.length > 0 && this.state.length > 2 && this.postalCode.length > 4
        return isValid;
    }

    handleExpMonthChange(event) {
        this.expMonth = event.target.value;
        const currentDate = new Date();
        if (!(currentDate.getFullYear() > +this.expYear || (currentDate.getFullYear() == +this.expYear && currentDate.getMonth() >= +this.expMonth))) {
            this.errorMessages = this.errorMessages.filter(m => m != CARD_EXPIRED_ERROR);
        }
    }

    handleExpYearChange(event) {
        this.expYear = event.target.value;
        const currentDate = new Date();
        if (!(currentDate.getFullYear() > +this.expYear || (currentDate.getFullYear() == +this.expYear && currentDate.getMonth() >= +this.expMonth))) {
            this.errorMessages = this.errorMessages.filter(m => m != CARD_EXPIRED_ERROR);
        }
    }

    handleNicknameChange(event) {
        this.nickname = event.target.value;
    }

    createTransientToken() {
        this.errorMessages = [];
        if (this.firstName.length < 1 || this.lastName.length < 1) {
            this.errorMessages.push(NAME_ERROR);
        }
        if (!this.isCCAddressValid()) {
            this.errorMessages.push(ADDRESS_ERROR);
        }
        const currentDate = new Date();
        if (currentDate.getFullYear() > +this.expYear || (currentDate.getFullYear() == +this.expYear && currentDate.getMonth() >= +this.expMonth)) {
            this.errorMessages.push(CARD_EXPIRED_ERROR);
        }
        console.log('Microform:', this.microform);
        const options = {
            expirationMonth: this.expMonth,
            expirationYear: this.expYear
        };
        return new Promise((resolve, reject) => this.microform.createToken(options, (err, token) => {
            if (err) {
                if (err.details && err.details.length > 0) {
                    for (let i = 0; i < err.details.length; i++) {
                        if (err.details[i].message == 'Validation error' && err.details[i].location == 'number') {
                            this.errorMessages.push(CARD_INVALID_ERROR);
                            console.log('CARD_INVALID_ERROR' + CARD_INVALID_ERROR);
                        } else if (err.details[i].message == 'Validation error' && err.details[i].location == 'securityCode') {
                            this.errorMessages.push(CVV_INVALID_ERROR);
                            console.log('CVV_INVALID_ERROR' + CVV_INVALID_ERROR);
                        } else {
                            this.errorMessages.push(err.details[i].message);
                            console.log('err.details[i].message' + err.details[i].message);
                        }
                    }
                } else {
                    this.errorMessages.push(err.message);
                    console.log('err.message--..' + err.message);
                }
                console.log('Error:', this.errorMessages);
                this.createTokenReturned = true;
            }
            console.log('Token:', token);
            this.transientToken = token;
            console.log('this.transientToken--->> ' + this.transientToken);

            resolve(true);
        }));
    }


    get showCardErrors() {
        return this.errorMessages.length > 0;
    }


    validateShippingAddress() {
        let isValidShipping = false;
        if (
            this.shippingAddress.street.length > 0
            && this.shippingAddress.city.length > 0
            && this.shippingAddress.region.length > 0
            && this.shippingAddress.country.length > 0
        ) {
            isValidShipping = true;
        }
        return isValidShipping;
    }

    checkValidity() {
        let isValid = true;
        isValid = isValid && (
            this.firstName.length > 0
            && this.lastName.length > 0
            && this.street.length > 0
            && this.city.length > 0
            && this.state.length > 0
            && this.postalCode > 0
        );

        const currentDate = new Date();
        if (currentDate.getFullYear() > +this.expYear || (currentDate.getFullYear() == +this.expYear && currentDate.getMonth() >= +this.expMonth)) {
            isValid = false;
            this.errorMessages.push(CARD_EXPIRED_ERROR);
        }

        return isValid && this.errorMessages.length < 1;
    }

    reportValidity() {
        this.errorMessages = [];
        let isValid = true;
        let isShippingValid = this.validateShippingAddress();

        isValid = isValid && this.checkValidity();

        if (!isShippingValid) {
            this.errorMessages.push('Please select a valid Shipping Address');
        }

        return isValid && isShippingValid && this.errorMessages.length < 1;
    }

    async authPayment() {
        try {
            const stateCode = this.state.split(':')[0];
            const countryCode = this.state.split(':')[1];
            const billingAddress = {
                name: `${this.firstName} ${this.lastName}`,
                street: this.street,
                city: this.city,
                region: stateCode,
                country: countryCode,
                postalCode: this.postalCode
            };

            const isValid = this.checkValidity();
            if (!isValid) {
                this.errorMessages = ['Error: Invalid payment details provided.'];
                return this.errorMessages;
            }

            const paymentData = {
                token: this.transientToken,
                createToken: true,
                accountId: this.effectiveAccountId,
                currencyISOCode: 'USD',
                addressString: JSON.stringify(billingAddress),
                expirationMonth: this.expMonth,
                expirationYear: this.expYear,
                firstName: this.firstName,
                lastName: this.lastName,
                communityId: this.currentCommunityId,
                amount: this.grandTotalAmount
            };

            // Authorize Card
            const authorizeResponse = await authorizeCard({ paymentsData: paymentData });

            if (!authorizeResponse) {
                this.errorMessages = ['Error: Unknown error processing card'];
                return this.errorMessages;
            }

            console.log('authorizeResponse:', authorizeResponse);

            const paymentId = authorizeResponse.id;

            this.paymentId = paymentId;
            console.log('paymentId:', paymentId);

            if (paymentId) {
                // Wait for 3 seconds before proceeding (if needed)
                await new Promise(resolve => setTimeout(resolve, 2000));

                const paymentResult = await this.callPostAuth(paymentId, billingAddress, 'Credit Card');
                console.log('Payment Result:', paymentResult);

                if (paymentResult && paymentResult.salesforceResultCode === 'Success') {
                    return {
                        success: true,
                        responseCode: paymentId
                    };
                } else {
                    this.errorMessages = ['Error: Post-authorization failed.'];
                    return this.errorMessages;
                }
            } else {
                this.errorMessages = ['Error: No payment ID received.'];
                return this.errorMessages;
            }
        } catch (error) {
            console.error('Error in authPayment:', error);
            this.errorMessages = [`Error: ${error.message || 'Unknown error occurred'}`];
            return this.errorMessages;
        }
    }

    async callPostAuth(paymentId, billingAddress, paymentMethod) {
        try {
            const paymentResult = await postAuthorizePayment(
                this.checkoutId,
                paymentId,
                billingAddress,
                { 'paymentMethod': paymentMethod }
            );

            console.log('Payment Result in callPostAuth:', paymentResult);


            return paymentResult;
        } catch (error) {
            console.error('Error in callPostAuth:', error);
            return false;
        }
    }

    async updatePaymentInformation() {
        console.log('Inside updatePaymentInformation entry');

            try {

                const altPayment = await updatePaymentInstrument({ cartId: this.cartId, gatewayToken: this.paymentId });
                console.log('altPayment-->> ' + altPayment);
                return altPayment;
    
            } catch (error) {
                console.log('error during alt payment update -->> '+ error);
                return error;
            }
        }
        

    // async placeCCOrder() {
    //     let orderResponse = await placeOrder();
    //     console.log("CC Order placed successfully:-->>>", JSON.stringify(orderResponse));
    //     // console.log("CC Order placed successfully: orderResponse.orderReferenceNumber:-->>>", orderResponse.orderReferenceNumber);

    //     if (orderResponse.orderReferenceNumber) {
    //         setTimeout(() => {
    //             refreshCartSummary();
    //             this.navigateToOrder(orderResponse.orderReferenceNumber);
    //             console.log('CC order With AltPayment orderReferenceNumber: ' + orderResponse.orderReferenceNumber);
    //         }, 2000);

    //     } else {
    //         throw new Error("Required orderReferenceNumber is missing");
    //     }
    // }

    // navigateToOrder(orderNumber) {
    //     this[NavigationMixin.Navigate]({
    //         type: "comm__namedPage",
    //         attributes: {
    //             name: "Order"
    //         },
    //         state: {
    //             orderNumber: orderNumber
    //         }
    //     });
    // }

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
}