public with sharing class AvalaraTaxInvoice {
    public AvalaraTaxInvoice() {
    }

    @AuraEnabled
    public static Map<String, Object> doAvaTaxSalesInvoice(String orderId, String cartIdVal) {
        Map<String, Object> result = new Map<String, Object>();
        try {
            //
            List<WebCart> webcart = [SELECT Id, WebStoreId, Tax_Request_EndPoint__c FROM WebCart WHERE Id = :cartIdVal LIMIT 1];
            System.debug('doAvaTaxSalesInvoice Cart Obejct: ' + webcart[0]);
            String requestEndPoint = webcart[0].Tax_Request_EndPoint__c;
            String webstoreId = webcart[0].WebStoreId;
            // prepare request
            String requestBody = HTTPSalesInvoiceService.prepareSalesInvoiceRequest(orderId, cartIdVal, webstoreId);
            // service call
            Map<String, String> responseMap = HTTPSalesInvoiceService.makeExternalCallout(requestEndPoint, requestBody);
            String response = responseMap.get(Constants.SERVICE_RESPONSE_BODY);
            Map<String, Object> responseObject = (Map<String, Object>) JSON.deserializeUntyped(response);
            String status = (String) responseObject.get('status');
            if (status == 'Saved') {
                result.put('StatusCode', 201);
                return result;
            } else {
                System.debug('doAvaTaxSalesInvoice response: ' + response);
                result.put('StatusCode', 400);
            }
        } catch (Exception e) {
            result.put('StatusCode', 500);
            result.put('ErrorMessage', 'doAvaTaxSalesInvoice: ' + e.getMessage());
        }
        return result;
    }
}