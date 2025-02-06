public without sharing class StripeController {

    @AuraEnabled
    public static void tokenizeCreditCard(String context) {
        try {
            // Parse the input JSON context
            Map<String, Object> paymentContext = (Map<String, Object>) JSON.deserializeUntyped(context);

            // Extract payment details
            String paymentRequestType = (String) paymentContext.get('paymentRequestType');
            Map<String, Object> paymentRequest = (Map<String, Object>) paymentContext.get('paymentRequest');
            
            System.debug('paymentRequest in StripeController-->> ' + paymentRequest);

            // Validate inputs
            if (String.isEmpty(paymentRequestType)) {
                throw new IllegalArgumentException('paymentRequestType is required.');
            }
            if (paymentRequest == null || paymentRequest.isEmpty()) {
                throw new IllegalArgumentException('paymentRequest is required.');
            }

            // // Call the StripeAdapter static method
            // StripeAdapter.StripeResponse response = StripeAdapter.processWireAchPayment(paymentRequestType, paymentRequest);

            // System.debug('response in StripeController -->> ' + paymentRequest);
            // Return the response as a JSON string
            // return JSON.serialize(response);

        } catch (Exception e) {
            // Log the error and return an error response
            System.debug('Error processing payment: ' + e.getMessage());
            // return JSON.serialize(new Map<String, Object>{
            //     'status' => 'error',
            //     'message' => e.getMessage()
            // });
        }
    }
}