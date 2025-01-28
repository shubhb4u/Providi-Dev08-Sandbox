public without sharing class orderSummaryHandler {

    public static void getOrderSummary(List<orderSummary> orderSummaryList) {

        System.debug('orderSummaryList-->> '+ orderSummaryList);
        Set<Id> orderSummaryIds = new Set<Id>();
        if(!orderSummaryList.isEmpty()){
            for(OrderSummary ordL: orderSummaryList){
                orderSummaryIds.add(ordL.id);
            }

        }

        

    }
}