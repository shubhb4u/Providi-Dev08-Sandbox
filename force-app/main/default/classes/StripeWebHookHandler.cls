@RestResource(urlMapping='/webhook/')
global without sharing class StripeWebHookHandler {

    @HttpPost
    global static void handleWebhook( ) {
        try {
            // Get the request body
            RestRequest req = RestContext.request;
            String payload = req.requestBody.toString();
            System.debug('Received payload: ' + payload);

            // Parse the JSON payload into a map
            Map<String, Object> event = (Map<String, Object>) JSON.deserializeUntyped(payload);

            // Extract event type and data
            String eventType = (String) event.get('type');
            Map<String, Object> eventData = (Map<String, Object>) event.get('data');
            Map<String, Object> stripeObject = (Map<String, Object>) eventData.get('object');

            // System.debug('eventType-->> '+ eventType);
            // System.debug('eventData-->> '+ eventData);
            // System.debug('stripeObject -->> '+ stripeObject);

            // Check if the object is present and deserialize it
            if (stripeObject == null) {
                System.debug('Failed to deserialize Stripe object. Possible API version mismatch.');
                RestContext.response.statusCode = 400;
                RestContext.response.responseBody = Blob.valueOf('Error: Invalid payload or missing data object');
                return;
            }

            // Handle the event based on its type
            if (eventType == 'checkout.session.async_payment_succeeded') {
                handlecheckoutSessionSucceeded(stripeObject);
            } else if(eventType == 'payment_link.created') {
                System.debug('Unhandled event type: ' + eventType);
            }

            //===============================================================================================================================================================
            
            //refer this page for setting up payment event webhook when status changes among 3 until payment is received fully by the bank. !!!
            //https://docs.stripe.com/payments/bank-transfers/accept-a-payment
            
            //==================================================================================================================================================================

            // Respond with success
            RestContext.response.statusCode = 200;
            RestContext.response.responseBody = Blob.valueOf('Success');
        } catch (Exception e) {
            System.debug('Error handling Stripe Webhook: ' + e.getMessage());
            RestContext.response.statusCode = 500;
            RestContext.response.responseBody = Blob.valueOf('Error: ' + e.getMessage());
        }
    }

    private static void handlecheckoutSessionSucceeded(Map<String, Object> stripeObject) {
        String paymentLink = (String) stripeObject.get('payment_link');
        String paymentStatus = (String) stripeObject.get('payment_status');
    
        System.debug('Payment Intent Succeeded! Payment Link: ' + paymentLink + ', Payment Status: ' + paymentStatus);
    
        // Query the Order_WebHook__c record
        Order_WebHook__c ordWeb;
        try {
            ordWeb = [SELECT Id, Order_Ref_Number__c 
                      FROM Order_WebHook__c 
                      WHERE Payment_Link_Id__c = :paymentLink 
                      LIMIT 1];
        } catch (Exception e) {
            System.debug('No Order_WebHook__c record found for Payment Link: ' + paymentLink);
            RestContext.response.statusCode = 404;
            RestContext.response.responseBody = Blob.valueOf('Error: No Order_WebHook record found for the provided Payment Link');
            return;
        }
    
        if (ordWeb == null || String.isEmpty(ordWeb.Order_Ref_Number__c)) {
            System.debug('Order_WebHook__c record is null or missing Order_Ref_Number__c.');
            RestContext.response.statusCode = 400;
            RestContext.response.responseBody = Blob.valueOf('Error: Invalid Order_WebHook data');
            return;
        }
    
        // Query the Order record
        List<Order> ordList = [SELECT Id, Status 
                               FROM Order 
                               WHERE OrderReferenceNumber = :ordWeb.Order_Ref_Number__c];
        if (ordList.isEmpty()) {
            System.debug('No Order record found for Order Reference Number: ' + ordWeb.Order_Ref_Number__c);
            RestContext.response.statusCode = 404;
            RestContext.response.responseBody = Blob.valueOf('Error: No Order record found for the provided Order Reference Number');
            return;
        }
    
        // Update the Order status
        try {
            ordList[0].Status = 'Paid';
            update ordList;
            System.debug('Order record updated successfully: ' + ordList[0]);
        } catch (Exception e) {
            System.debug('Error updating Order record: ' + e.getMessage());
            RestContext.response.statusCode = 500;
            RestContext.response.responseBody = Blob.valueOf('Error updating Order record: ' + e.getMessage());
            return;
        }
    
        System.debug('Payment successfully processed and Order status updated.');
    }
    


}