public with sharing class HTTPSalesInvoiceService {
    public HTTPSalesInvoiceService() {

    }

    public static String prepareSalesInvoiceRequest(String orderId, String cartIdVal, String webstoreId) {
        Map<String, Object> requestBody = new Map<String, Object>();
        requestBody.put('type', 'SalesInvoice');
        // get Order Number from order ID
        Order order = [SELECT OrderReferenceNumber, OrderNumber, CurrencyIsoCode, BillingStreet, BillingCountry, BillingState, BillingCity, BillingPostalCode FROM Order WHERE OrderReferenceNumber =: orderId LIMIT 1];
        if (orderId == Order.OrderReferenceNumber) {
            requestBody.put('code', order.OrderNumber);
            requestBody.put('currencyCode', order.CurrencyIsoCode);
            requestBody.put('commit', false);
            requestBody.put('date', DateTime.now().format('yyyy-MM-dd HH:mm:ss'));

            // tax meta data
            TaxMetaData taxMetaData = getMetaData(webstoreId,'','');
            System.debug('prepareSalesInvoiceRequest taxMetaData' + taxMetaData);

            // add companu code from tax metadata
            requestBody.put('companyCode', taxMetaData.companyCode);

            // customer exemptions
            if (taxMetaData.customerTaxExemption) {
              User user = [ SELECT Id, AccountId, Account.Exemption_Code__c, Account.Entity_Use_Code__c FROM User WHERE id = :UserInfo.getUserId() LIMIT 1];
              if (user != null && user.AccountId != null && String.isNotBlank(user.Account.Entity_Use_Code__c) && String.isNotBlank(user.Account.Exemption_Code__c)) {
                requestBody.put('customerExemptionCode', user.Account.Exemption_Code__c);
                requestBody.put('entityUseCode', user.Account.Entity_Use_Code__c);
              }
            }

            // fetch item details and prepare lines
            List<Map<String, Object>> lines = new List<Map<String, Object>>();
            List<CartItem> cartItems = [SELECT Id, Name, Type, TotalLineAmount, Sku, Quantity, Product2.Entity_Use_Code__c, Product2.Exemption_Code__c FROM CartItem WHERE Cart.Id =: cartIdVal];
            for (CartItem cartItem : cartItems) {
                String entityUseCode = cartItem.Product2.Entity_Use_Code__c;
                String exemptionCode = cartItem.Product2.Exemption_Code__c;
                Map<String, Object> lineItem = new Map<String, Object>();
                lineItem.put('taxIncluded', false);
                lineItem.put('Number', cartItem.Id);
                lineItem.put('amount', cartItem.TotalLineAmount);
                lineItem.put('quantity', cartItem.Quantity);

                if (cartItem.Type == 'Product') {
                    lineItem.put('itemCode', cartItem.sku);
                    // product exemptions
                    if (taxMetaData.productTaxExemption) {
                      lineItem.put('entityUseCode', entityUseCode);
                      lineItem.put('exemptionCode', exemptionCode);
                    }
                } else {
                    lineItem.put('itemCode', 'Shipping-Item');
                }
                lines.add(lineItem);
            }
            requestBody.put('lines', lines);

            // fetch delivery address from cart delivery group and add to the request
            List<CartDeliveryGroup> cartDeliveryGroups = [SELECT Id, DeliverToCity, DeliverToCountry, DeliverToStreet, DeliverToState, DeliverToPostalCode FROM CartDeliveryGroup WHERE CartId =: cartIdVal LIMIT 1];
            Map<String, Object> addresses = new Map<String, Object>();
            // shipping address
            Map<String, Object> shipTo = new Map<String, Object>();
            shipTo.put('region', cartDeliveryGroups[0].DeliverToState);
            shipTo.put('country', cartDeliveryGroups[0].DeliverToCountry);
            shipTo.put('postalCode', cartDeliveryGroups[0].DeliverToPostalCode);
            shipTo.put('line1', cartDeliveryGroups[0].DeliverToStreet);
            shipTo.put('city', cartDeliveryGroups[0].DeliverToCity);
            addresses.put('shipTo', shipTo);
            // billing address
            Map<String, Object> shipFrom = new Map<String, Object>();
            shipFrom.put('region', order.BillingState);
            shipFrom.put('country', order.BillingCountry);
            shipFrom.put('postalCode', order.BillingPostalCode);
            shipFrom.put('line1', order.BillingStreet);
            shipFrom.put('city', order.BillingCity);
            addresses.put('shipFrom', shipFrom);
            // add addresses to request body
            requestBody.put('addresses', addresses);

            // get customer email from OrderSummary
            List<OrderSummary> orderSummaries = [SELECT BillingEmailAddress, OrderNumber FROM OrderSummary WHERE OrderNumber =: orderId LIMIT 1];
            requestBody.put('customerCode', orderSummaries[0].BillingEmailAddress);

            System.debug('prepareSalesInvoiceRequest requestBody' + JSON.serialize(requestBody));
        }

        return JSON.serialize(requestBody);
    }

    public static HttpRequest createHttpRequest(
      String requestEndPoint
    ) {
      HttpRequest req = new HttpRequest();
      req.setEndpoint(requestEndPoint);
      req.setMethod('POST');
      req.setHeader('Content-Type', 'application/json');
      req.setTimeout(5000);
      return req;
    }

    /*
    * Avalar Slaes Invoice service call to show transactions on dashboard
    */
    public static Map<String, String> makeExternalCallout( String requestEndPoint, String requestBody) {
      Map<String, String> responseMap = new Map<String, String>();
      try {
        HttpRequest req = createHttpRequest(requestEndPoint);
        Http http = new Http();
        HTTPResponse res = null;
        req.setbody(requestBody);
        System.debug('Http Sales invoice request : ' + req);
        res = http.send(req);
        System.debug('Http Sales invoice resposne : ' + res.getBody());
        if (res.getStatusCode() == Constants.HTTP_200 || res.getStatusCode() == 201) {
          responseMap.put(
            Constants.HTTP_RESPONSE_STATUS,
            Constants.HTTP_RESPONSE_STATUS_SUCCESS
          );
          responseMap.put(
            Constants.RESPONSE_REASON_CODE,
            String.valueOf(res.getstatusCode())
          );
          responseMap.put(Constants.SERVICE_RESPONSE_BODY, res.getBody());
        } else {
          responseMap.put(
            Constants.HTTP_RESPONSE_STATUS,
            Constants.HTTP_RESPONSE_STATUS_ERROR
          );
          responseMap.put(
            Constants.RESPONSE_REASON_CODE,
            String.valueOf(res.getstatusCode())
          );
          responseMap.put(Constants.SERVICE_RESPONSE_BODY, res.getBody());
        }
      } catch (Exception expObj) {
        responseMap.put(
          Constants.HTTP_RESPONSE_STATUS,
          Constants.HTTP_RESPONSE_STATUS_ERROR
        );
        System.debug(
          'Exception due to error ====' +
            expObj.getMessage() +
            'at Line Number ====' +
            expObj.getLineNumber()
        );
      }
      return responseMap;
    }

    public static TaxMetaData getMetaData(String webStoreId,String transactionType,String docType) {
      return TaxConfiguration.getMetaDataDTO(webStoreId,transactionType,docType);
    }
}