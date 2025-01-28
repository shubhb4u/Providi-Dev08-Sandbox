trigger OrderTrigger on Order (after update) {

    if(Trigger.isUpdate){
        if(Trigger.isAfter){
            OrderHandler.getOrderSummary(Trigger.new, Trigger.oldMap);
        }
    }
}