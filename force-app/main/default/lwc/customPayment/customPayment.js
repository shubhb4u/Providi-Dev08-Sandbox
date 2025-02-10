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
import getCreditLimit from '@salesforce/apex/AlternativePaymentController.getCreditLimit';
import updateCreditLimit from '@salesforce/apex/AlternativePaymentController.updateCreditLimit';
import ERROR_INSUFFICIENT_CREDIT from '@salesforce/label/c.Error_Insufficient_Credit_Limit';
import SUCCESS_PO_NUMBER from '@salesforce/label/c.Success_PO_Number_Generated';
import getAdminEmail from '@salesforce/apex/CybersourceController.getAdminEmail';
import NAME_ERROR from '@salesforce/label/c.Error_Name_Required';
import ADDRESS_ERROR from '@salesforce/label/c.Error_Address_Required';
import CARD_EXPIRED_ERROR from '@salesforce/label/c.Error_Card_Expired';
import CARD_INVALID_ERROR from '@salesforce/label/c.Error_Card_Invalid';
import CVV_INVALID_ERROR from '@salesforce/label/c.Error_CVV_Invalid';

export default class CustomPayment extends NavigationMixin(useCheckoutComponent(LightningElement)) {
    @api checkoutDetails;
    isLoading = false;
    firstLoad = false;
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
    @track yearOptions = [];
    stateOptions = [];
    effectiveAccountId;
    @track checkoutId;
    @track shippingAddress;
    @track errorMessages = [];
    @track billingAddress;
    @track showError = false;
    @track error;
    @api headerLabel;
    @api inputLabel;
    @api placeholderLabel;
    @api hideHeading = false;
    poNumber;
    GatewayToken;
    postAuthCalls;
    authPaymentToken;
    effectiveAccountId;
    availableCreditLimit;
    disablePlaceOrderButton = false;
    generatedPONumber;
    @track grandTotalAmount;
    paymentId;
    cartId;
    isCreditCard = true;
    isPO = false;
    isWire = false;
    selectedPaymentType;
    adminEmail;
    orderReferenceNumber;
    genPONumber;

    @wire(getAdminEmail)
    wiredAdminEmail({ error, data }) {
        if (data) {
            this.adminEmail = data;
        } else if (error) {
            console.error('Error fetching admin email:', error);
        }
    }

    get errorMessage() {
        return ERROR_INSUFFICIENT_CREDIT.replace('{0}', this.adminEmail);
    }

    get successMessage() {
        return SUCCESS_PO_NUMBER.replace('{0}', this.genPONumber);
    }

    @wire(CheckoutInformationAdapter, {})
    checkoutInfo({ error, data }) {
        if (!this.isInSitePreview()) {
            if (data) {
                this.checkoutId = data.checkoutId;
                this.cartId = data.cartSummary?.cartId;
                this.deliveryAddress = data.deliveryGroups?.items[0].deliveryAddress;
                this.grandTotalAmount = parseFloat(data.cartSummary?.grandTotalAmount || 0);
                console.log('PO checkoutInfo:', JSON.stringify(data));
                this.shippingAddress = data.deliveryGroups?.items[0].deliveryAddress;
                this.orderReferenceNumber = data.orderReferenceNumber;

                if (!this.availableCreditLimit) {
                    this.getAccountCreditLimit();
                } else {
                    this.evaluatePlaceOrderButton();
                }
                this.generateRandomPONumber();
            } else if (error) {
                console.log('##cybersourcePayment checkoutInfo Error:', error);
            }
        }
    }

    handlePaymentTypeSelection(event) {
        this.selectedPaymentType = event.currentTarget.dataset.type;
        if (this.selectedPaymentType == 'wire') {
            this.isCreditCard = false;
            this.isPO = false;
            this.isWire = true;
        } else if (this.selectedPaymentType == 'card') {
            this.isCreditCard = true;
            this.isPO = false;
            this.isWire = false;
        } else {
            this.isCreditCard = false;
            this.isPO = true;
            this.isWire = false;
        }
    }

    async getAccountCreditLimit() {
        try {
            const response = await getCreditLimit({ accountId: this.effectiveAccountId });
            this.availableCreditLimit = parseFloat(response.Credit_limit__c || 0);
            if (this.grandTotalAmount !== undefined) {
                this.evaluatePlaceOrderButton();
            }
        } catch (error) {
            console.log('Error fetching credit limit-->>', error);
        }
    }

    evaluatePlaceOrderButton() {
        if (this.availableCreditLimit !== undefined && this.grandTotalAmount !== undefined && this.isPO) {
            this.disablePlaceOrderButton = this.availableCreditLimit < this.grandTotalAmount;
        }
    }

    async connectedCallback() {
        if (!sessionStorage.getItem('pageReloaded')) {
            sessionStorage.setItem('pageReloaded', 'true');
            setTimeout(() => location.reload(), 2000);
        }
        this.currentCommunityId = communityId;

        try {
            const ctx = await getSessionContext();
            this.effectiveAccountId = ctx.effectiveAccountId;

            if (this.effectiveAccountId) {
                await this.getAccountCreditLimit();
                if (this.grandTotalAmount !== undefined) {
                    this.evaluatePlaceOrderButton();
                }
            }
        } catch (err) {
            console.error('Error getting Session Context:', err);
        }

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
            });

        await loadScript(this, microformScript)
            .then(() => {
                this.setupMicroform();
            }).catch(err => {
                console.log(err);
            });
    }

    generateRandomPONumber() {
        this.genPONumber = `PO-${this.orderReferenceNumber}`; 
    }    

    @api
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

        } else {
            const purchaseOrderInput = this.genPONumber;
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

    @api
    async paymentProcess() {

        if (!this.reportValidity()) {
            throw new Error('Required data is missing');
        }
        if (this.isCreditCard) {
            this.createTransientToken();
        } else {
            const createAltPayment = await this.preAuthorizePayment();
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
            paymentMethod: 'Purchase Order'
        }).then(response => {
            if (typeof response === 'string') {
                response = JSON.parse(response);
            }
            this.authPaymentToken = response.GatewayToken;
            console.log('response from preAuthorize -->> '+ JSON.stringify(response));
            this.completePayment();
            return this.authPaymentToken;

        }).catch(error => {
            return error;
        });
    }

    @api
    async completePayment() {
        let address = this.shippingAddress;
        const purchaseOrderInputValue = this.genPONumber;
        let po = await simplePurchaseOrderPayment(this.checkoutId, purchaseOrderInputValue, address);
        console.log('po authorized --> '+ JSON.stringify(po));
        setTimeout(() => {
            this.callPostAuth(this.authPaymentToken, address, 'Purchase Order');
        }, 3000);
        return po;
    }

    ////////////////////////// Credit card Code ////////////////////////////////////////////////////

    // create the Cybersource form and add the fields
    setupMicroform() {
        generateKey().then(res => {
            const flex = new Flex(res);
            // const microform = flex.microform({ 'iframe': { 'line-height': '0.5rem' } });
            const microform = flex.microform();
            const number = microform.createField('number');
            const securityCode = microform.createField('securityCode', { maxLength: 4 });
            const numberElement = this.template.querySelector('.number-container');
            const securityCodeElement = this.template.querySelector('.securityCode-container');
            number.load(numberElement);
            securityCode.load(securityCodeElement);
            this.microform = microform;
        }).catch(err => {
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
                this.createTokenReturned = true;
            }
            console.log('Token:', token);
            this.transientToken = token;
            console.log('this.transientToken--->> ' + this.transientToken);
            if (this.transientToken) {
                setTimeout(() => {
                    this.authPayment();
                }, 2000);
            }
            resolve(true);
        }));
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
            this.authPaymentToken = paymentId;
            this.paymentId = paymentId;

            if (paymentId) {
                // Wait for 3 seconds before proceeding (if needed)
                await new Promise(resolve => setTimeout(resolve, 3000));
                const paymentResult = await this.callPostAuth(paymentId, billingAddress, 'Credit Card');

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

    // Credit card and Custom PO common code for Post Auth -
    async callPostAuth(paymentId, billingAddress, paymentMethod) {
        try {
            const paymentResult = await postAuthorizePayment(this.checkoutId, paymentId, billingAddress, { 'paymentMethod': paymentMethod });
            console.log('postAuthorizePayment paymentResult', paymentResult);

            if (paymentResult.salesforceResultCode == 'Success') {
                this.postAuthCalls = this.postAuthCalls + 1;
                this.updatePaymentInformation();

            } else {
                if (this.postAuthCalls == 1) {
                    this.postAuthCalls = this.postAuthCalls + 1;
                    setTimeout(() => {
                        console.log('Attempting second PostAuthorization call');
                        this.callPostAuth(paymentId, billingAddress, paymentMethod);
                    }, 2000);
                    this.errorMessages.push('Note :  We are resubmitting the payment information please wait for some time .');
                } else {
                    this.errorMessages = [];
                    this.errorMessages.push('Please go back to the cart page and resubmit the billing data.');
                }

                return this.errorMessages;
            }

        } catch (error) {
            console.log('postAuthorizePayment- exception', error);
            if (this.postAuthCalls == 1) {
                this.postAuthCalls = this.postAuthCalls + 1;
                setTimeout(() => {
                    console.log('Attempting second PostAuthorization call');
                    this.callPostAuth(paymentId, billingAddress, paymentMethod);
                }, 2000);
                this.errorMessages.push('Note :  We are resubmitting the payment information please wait for some time .');
            } else {
                this.errorMessages = [];
                this.errorMessages.push('Please go back to the cart page and resubmit the billing data.');
            }
            return this.errorMessages;
        }
    }

    @api
    updatePaymentInformation() {
        console.log('PoNumber in updatePaymentInstrument --> '+ this.genPONumber);
        updatePaymentInstrument({ cartId: this.cartId, gatewayToken: this.authPaymentToken, PoNumber: this.genPONumber })
        .then((data) => {
            console.log('Payment instrument updated successfully.', data);
            if (data) {
                this.callPlaceOrderAPI();
            }
        })
        .catch(error => {
            console.log('reviewCartDetails- updatePaymentInstrument', JSON.stringify(error));
        });
    }

    async callPlaceOrderAPI() {
        let orderResponse = await placeOrder();
        console.log("Order placed successfully: orderResponse.orderReferenceNumber:-->>>", orderResponse.orderReferenceNumber);

        if (orderResponse.orderReferenceNumber) {
            if (this.isPO) {
                this.updateCreditLimitAccount();
            }
            refreshCartSummary();
            this.navigateToOrder(orderResponse.orderReferenceNumber);
            console.log('Order With AltPayment orderReferenceNumber: ' + orderResponse.orderReferenceNumber);
        } else {
            throw new Error("Required orderReferenceNumber is missing");
        }
    }

    async updateCreditLimitAccount() {
        try {
            const response = await updateCreditLimit({ accountId: this.effectiveAccountId, total: this.grandTotalAmount });
        } catch (error) {
            console.log('Error fetching credit limit-->>', error);
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