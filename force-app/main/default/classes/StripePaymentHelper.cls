public without sharing class StripePaymentHelper {

    public static String baseURL = 'https://api.stripe.com';
    public static Map<String, Map<String, Object>> productDataMap = new Map<String, Map<String, Object>>();
    public static String secretKey;
    public static String publicKey;

    static{
        // Stripe_Credential__mdt credentials = Stripe_Credential__mdt.getInstance('Stripe_Credentials');
        // secretKey = credentials.secretKey__c;//Stripe Secret Key 
        // publicKey = credentials.publicKey__c;//Stripe Public key 

        secretKey = 'sk_test_51QeiGn2NXHYGz9T9P3cNTAHFvJaQsoo1lJWwP1Mp55Zk4UCBDLGv2GPptByfQzr6w28J9ynLnHJRx7z8VptQ1qkU00ITuPwlIt';//Stripe Secret Key 
        publicKey = 'pk_test_51QeiGn2NXHYGz9T9J2akbaXebj3XE1uKLai7CKge29Ar7QChN3PpQOYyz0ezFcLwusbJ8cV30X0jTLYGtRIOfXmS00E0PXzr41';//Stripe Public key 
    }


    //Added by Shubham
    @AuraEnabled(cacheable=true)
	public static List<CartItem> getCartItems(String parentId){
		return [ Select id,Name, Product2Id,  Product2.Name, CurrencyIsoCode, Product2.ProductCode, SalesPrice, Quantity from CartItem  where CartId  =: parentId ];
	}

    @AuraEnabled(cacheable=true)
    public static Map<String, Object> sendPaymentRequest(String productsJson){
        List<CartItem> productList = (List<CartItem>)JSON.deserialize(productsJson, List<CartItem>.class);
        // String opptyId = productList[0].OpportunityId;
        if(!productList.isEmpty()){
            for(CartItem ct: productList){
                ct.SalesPrice *= 100;
            }
        }
        
        for(CartItem item: productList){
            Map<String, Object> productData = new Map<String, Object>{ 'Id' => item.Id, 'Quantity' => item.Quantity };
            String jsonStr = createPrice(item);
            if(jsonStr != null){
                 Map<String, Object> responseMap = (Map<String, Object>)JSON.deserializeUntyped(jsonStr);
                 String priceId = (String)responseMap.get('id');
                 if(priceId != null){
                    productDataMap.put(item.id, new Map<String, Object>{ 'responseId' => priceId, 'productData' => productData}); 
                 }else{
                    throw new AuraHandledException('Something Went Wrong: Price Not generated');
                 } 
            }
        }

        if (!productDataMap.isEmpty()) {
            String paymentLinkResponse = createPayementLink();
            
            if (paymentLinkResponse != null) {
                // Deserialize the response to extract the payment URL
                Map<String, Object> responseObjMap = (Map<String, Object>) JSON.deserializeUntyped(paymentLinkResponse);
                String paymentURL = String.valueOf(responseObjMap.get('url'));
                String responseId = responseObjMap.containsKey('id') ? String.valueOf(responseObjMap.get('id')) : null;

                
                if (paymentURL != null) {
                    // Send the email to the customer with the payment URL
                    String emailResponse = sendEmailToCustomerForPayment(paymentURL);
                    System.debug('Email response: -->>> ' + emailResponse);
                    
                    // If email response contains an error, throw an exception
                    if (emailResponse.contains('Error')) {
                        throw new AuraHandledException('Something Went Wrong: Email not sent to Customer');
                    }
                    
                    // Return the payment URL if email is successfully sent
                    return responseObjMap;
                } else {
                    // If the payment URL is not found, throw an exception
                    throw new AuraHandledException('Something Went Wrong: Payment link not generated');
                }
            } else {
                // If payment link response is null, return 'error' and handle appropriately
                throw new AuraHandledException('Something Went Wrong: Payment link response is null');
            }
        } else {
            // If the product data map is empty, return 'error'
            throw new AuraHandledException('No product data available to process the payment');
        }
        
    } 


    //This method is for sending Email to customer
    public static string sendEmailToCustomerForPayment(String paymentURL){
        
        Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
        email.setToAddresses(new String[] { 'Shubham.m@etg.digital' });
        email.setSaveAsActivity(false);
        email.setSubject('Payment Request for: Quest B2B' );
        String customerName = 'Quest B2B';
        email.setPlainTextBody('Dear ' + customerName + ',' + 
                          '\n\nClick on this link ' + paymentURL + ' to make a payment for your recent purchase of Quest B2B' );
        
        System.debug('Email object details: --->>> ' + email);
        
        try{
         Messaging.sendEmail(new List<Messaging.SingleEmailMessage>{email});
         System.debug('Email sent to -->> '+ email);
          return 'Payment link email sent successfully.';
        }catch(Exception e){
            System.debug('Email sent to -->> '+ email);
            return 'Error Sending Email:'+ e.getMessage();
        }
                                                 
    }

    @AuraEnabled(cacheable=true)
    public static String createPrice(CartItem product){
        String apiURL = baseURL+'/v1/prices';//Endpoint URL
        HttpRequest request = new HttpRequest();
        HttpResponse response = new HttpResponse();
        Http httpRequest = new Http();
        String requestBody = 'unit_amount_decimal='+EncodingUtil.urlEncode(String.valueOf(product.SalesPrice),'UTF-8')+
                              '&currency='+EncodingUtil.urlEncode(String.valueOf(product.CurrencyIsoCode),'UTF-8')+
                              '&product_data[name]='+EncodingUtil.urlEncode(product.Product2.Name,'UTF-8');        	
            System.debug('request body is ' + requestBody);
            request.setEndpoint(apiURL);
            request.setMethod('POST');
            request.setBody(requestBody);
            //Defining Headers For Authorization And Content Type
            request.setHeader('Authorization','Basic '+EncodingUtil.base64Encode(Blob.valueOf(secretKey+':' +publicKey)));
            request.setHeader('Content-Type', 'application/x-www-form-urlencoded');
            response = httpRequest.send(request);
            //Verifying Status Code
            if(response.getStatusCode() == 200)
            { 
                System.debug('response.getBody() -->>> '+response.getBody());
                return response.getBody();//Returning Response Body
            }
            else if (response.getStatusCode() != 200) {
				System.debug('Error response is ' + response);
                throw new AuraHandledException('Error Processing Payment From Apex');
            }
            return '';
    }
    @AuraEnabled(cacheable=true)
    public static String createPayementLink(){
        Integer lineItemIndex = 0;
            String requestBody = '';

            for (String productId : productDataMap.keySet()) {
                Map<String, Object> productInfo = productDataMap.get(productId);
                String responseId = (String)productInfo.get('responseId');
                Map<String, Object> productData = (Map<String, Object>)productInfo.get('productData');
                Integer quantity = Math.round((Double)productData.get('Quantity'));
                
                String lineItem = '&line_items[' + lineItemIndex + '][price]=' + EncodingUtil.urlEncode(responseId, 'UTF-8') + 
                                '&line_items[' + lineItemIndex + '][quantity]=' + quantity;
                lineItemIndex++;
                requestBody += lineItem;
            }

            String apiURL = baseURL + '/v1/payment_links'; // Endpoint URL
            HttpRequest request = new HttpRequest();
            Http httpRequest = new Http();

            request.setEndpoint(apiURL);
            request.setMethod('POST');
            request.setBody(requestBody);
            request.setHeader('Authorization', 'Basic ' + EncodingUtil.base64Encode(Blob.valueOf(secretKey + ':')));
            request.setHeader('Content-Type', 'application/x-www-form-urlencoded');

            HttpResponse response = httpRequest.send(request);
            //Verifying Status Code
            if(response.getStatusCode() == 200)
            { 
                return response.getBody();//Returning Response Body
            }
            else if (response.getStatusCode() != 200) {
                throw new AuraHandledException('Error Processing Payment From Apex');
            }
            return '';
    }

    @AuraEnabled
    public static void createMetadataRecord(String orderRefNumber, String paymentUrl, String paymentId) {
        try {
            Order_WebHook__c OrderPaymentHook = new Order_WebHook__c();
            
            OrderPaymentHook.Order_Ref_Number__c = orderRefNumber;
            OrderPaymentHook.Payment_Url__c = paymentUrl;
            OrderPaymentHook.Payment_Link_Id__c = paymentId;

            insert OrderPaymentHook;
        } catch (Exception ex) {
            throw new AuraHandledException('Error creating metadata record: ' + ex.getMessage());
        }
    }
}