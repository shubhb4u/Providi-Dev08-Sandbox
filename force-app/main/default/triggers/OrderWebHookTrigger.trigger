trigger OrderWebHookTrigger on Order_WebHook__c (before insert) {

    if(Trigger.isInsert){
        if(Trigger.isBefore){
            OrderWebHookHandler.sendEmailToCust(Trigger.New);
        }
    }

}