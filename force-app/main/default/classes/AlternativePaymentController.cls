/**
 * @description       : Controller class for checkout payment authorization
 * @author            : Code It Forward
 * @last modified on  : 09-29-2023
**/
public without sharing class AlternativePaymentController extends PreAuthorizeAlternativePayment{
    public AlternativePaymentController() {
        super();
    }
    
    /**
    * @description Method to call creating an alterative payment
    * @param billingContactPointAddressId Buyer Account billing contact point Address Id
    * @param cartId Id of the current cart
    * @param paymentMethod Payment Method, example: Check,Wire Transfer,etc.
    **/

    @AuraEnabled
    public static AlternativePaymentMethod preAuthorize( string country, string postalCode, string region, string city, string street,  String cartId, String paymentMethod) {
        try {
            // Create the Alternative Payment Method (APM)
            System.debug('paymentMethod-->> '+ paymentMethod);
            AlternativePaymentMethod APMId = createAlternativePaymentMethod(country, postalCode, region, city, street, cartId, paymentMethod);
            System.debug('APMId-->>>  ' + APMId);
            updateCartWithAPM(cartId, APMId.Id);
            return APMId;
            
        } catch (Exception e) {
            // Catch all other exceptions and provide a meaningful message
            System.debug('Unexpected Exception: ' + e.getMessage());
            throw new AuraHandledException('An unexpected error occurred. Please contact support if the issue persists.');
        }
    }

    @AuraEnabled
    public static void authorizePayment(String orderSummaryId, Id accountId, Decimal grandTotalAmount, String paymentMethod, Decimal amount, Id paymentGatewayId) {
        List<AuthorizeAlternativePayment.PaymentRequest> requests = new List<AuthorizeAlternativePayment.PaymentRequest>();

        AuthorizeAlternativePayment.PaymentRequest paymentRequest = new AuthorizeAlternativePayment.PaymentRequest();
        paymentRequest.orderSummaryId = orderSummaryId;
        paymentRequest.accountId = accountId;
        paymentRequest.grandTotalAmount = grandTotalAmount;
        paymentRequest.paymentMethod = paymentMethod;
        paymentRequest.amount = amount;

        AuthorizeAlternativePayment.PaymentGateway paymentGateway = new AuthorizeAlternativePayment.PaymentGateway();
        paymentGateway.Id = paymentGatewayId;
        paymentRequest.paymentGateway = paymentGateway;

        requests.add(paymentRequest);

        // Invoke the method
        AuthorizeAlternativePayment.execute(requests);
    }

    @AuraEnabled
    public static Boolean updatePaymentInstrument(String cartId){
        try {
            System.debug('cartId:' + cartId);
            List<WebCart> cartobj = [SELECT Id, PaymentMethodId, PaymentGroupId, Status, Type from WebCart where id = :cartId Limit 1];
            String paymentMethodId = cartobj[0].PaymentMethodId;
            System.debug('paymentMethodId -->> '+ paymentMethodId);
            System.debug('cart type -->> '+ cartobj[0].Type);

            AlternativePaymentMethod  apm = [SELECT Id, OwnerId, AlternativePaymentMethodNumber, PaymentGatewayId, NickName, GatewayToken, GatewayTokenDetails, Email, AccountId, Status, CompanyName, PaymentMethodStreet, PaymentMethodCity, PaymentMethodState, PaymentMethodPostalCode, PaymentMethodCountry, PaymentMethodAddress, ProcessingMode,  Phone, IpAddress, AuditEmail, IsAutoPayEnabled, PaymentMethodType, PaymentMethodSubType, PaymentMethodDetails, Type FROM AlternativePaymentMethod WHERE Id = :paymentMethodId];
            apm.Type = 'Wire ACH';
            apm.Status = 'Active';
            apm.PaymentMethodType = 'Wire';
            System.debug('apm: ' + apm.Id);
            update apm;
            return true;
            //String gatewayToken = (String) paymentMethod.id;;
            // altPaymentMethod.PaymentMethodType = 'Visa';
        } catch (Exception e) {
            throw new AuraHandledException('CybersourceController-updatePaymentInstrument: ' + e.getMessage());
        }
    }

    @AuraEnabled(Cacheable=true)
    public static Account getCreditLimit( string accountId) {
        try {
            
            Account acc = [Select id,Credit_limit__c from account where Id =: accountId limit 1];
            System.debug('acc: ' + acc);
            return acc;
            
        } catch (Exception e) {
            // Catch all other exceptions and provide a meaningful message
            System.debug('Unexpected Exception: ' + e.getMessage());
            throw new AuraHandledException('Could not fetch credit Limit');
        }
    }

    @AuraEnabled()
    public static Account updateCreditLimit( string accountId, Decimal total) {
        try {
            
            Account acc = [Select id,Credit_limit__c from account where Id =: accountId limit 1];
            acc.Credit_limit__c = acc.Credit_limit__c - total;
            update acc;
            return acc;
            
        } catch (Exception e) {
            // Catch all other exceptions and provide a meaningful message
            System.debug('Unexpected Exception: ' + e.getMessage());
            throw new AuraHandledException('Could not fetch credit Limit');
        }
    }

}