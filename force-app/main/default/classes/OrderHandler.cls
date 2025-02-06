public without sharing class OrderHandler {

    public static void getOrderSummary(List<Order> orderList, Map<Id, Order> oldMap) {
        
        Set<String> orderNumbers = new Set<String>();

        // Collect Order Reference Numbers
        if (!orderList.isEmpty()) {
            for (Order ordNum : orderList) {
                if (ordNum.OrderReferenceNumber != null && oldMap.get(ordNum.Id).OrderReferenceNumber == null) {
                    orderNumbers.add(ordNum.OrderReferenceNumber);
                    System.debug('ordNum.OrderReferenceNumber -->> ' + ordNum.OrderReferenceNumber);
                }
            }
        }

        if (!orderNumbers.isEmpty()) {
            // Query OrderSummary for matching Order Numbers
            List<OrderSummary> orderSummaryList = [
                SELECT Id, AccountId, GrandTotalAmount, Payment_type__c, OrderNumber 
                FROM OrderSummary 
                WHERE OrderNumber IN :orderNumbers
                LIMIT 1
            ];

            // Ensure the list is not empty before accessing its elements
            if (!orderSummaryList.isEmpty()) {
                OrderSummary orderSummary = orderSummaryList[0];
                orderSummary.Payment_type__c = 'Wire ACH';

                // Update the record
                update orderSummary;

                System.debug('Updated OrderSummary: ' + orderSummary);
            } else {
                System.debug('No OrderSummary records found for OrderNumbers: ' + orderNumbers);
            }
        } else {
            System.debug('No valid OrderReferenceNumbers found to process.');
        }
    }
}