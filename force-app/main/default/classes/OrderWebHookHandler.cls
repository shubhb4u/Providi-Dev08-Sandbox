public without sharing class OrderWebHookHandler {
    public static void sendEmailToCust(List<Order_WebHook__c> orderWebHookList) {
        // Validate input
        if (orderWebHookList == null || orderWebHookList.isEmpty()) {
            System.debug('No OrderWebHook records provided.');
            return;
        }

        List<Messaging.SingleEmailMessage> emailMessages = new List<Messaging.SingleEmailMessage>();

        // Prepare email messages
        for (Order_WebHook__c ord : orderWebHookList) {
            if (String.isNotBlank(ord.Payment_Url__c)) {
                String paymentURL = ord.Payment_Url__c;
                String customerName = 'Quest B2B'; // Customize as needed

                Messaging.SingleEmailMessage email = new Messaging.SingleEmailMessage();
                // Replace hardcoded email with a dynamic one if available
                email.setToAddresses(new List<String>{'Shubham.m@etg.digital'}); 
                email.setSaveAsActivity(false);
                email.setSubject('Payment Request for: ' + customerName);
                email.setPlainTextBody('Dear ' + customerName + ',' + 
                    '\n\nClick on this link ' + paymentURL + ' to make a payment for your recent purchase of ' + customerName + '.' +
                    '\n\nThank you for your business!');
                
                emailMessages.add(email);
                System.debug('Prepared email for Payment URL: ' + paymentURL);
            } else {
                System.debug('OrderWebHook record skipped due to missing Payment URL: ' + ord.Id);
            }
        }

        // Send emails
        if (!emailMessages.isEmpty()) {
            try {
                Messaging.sendEmail(emailMessages);
                System.debug('Emails sent successfully.');
            } catch (Exception e) {
                System.debug('Error sending emails: ' + e.getMessage());
            }
        } else {
            System.debug('No valid emails to send.');
        }
    }
}