import { LightningElement, api, wire } from 'lwc';
import doAvaTaxSalesInvoice from '@salesforce/apex/AvalaraTaxInvoice.doAvaTaxSalesInvoice';

export default class AvaTax extends LightningElement {

    avataxSalesInvoiceOrder(orderId, cartIdVal) {
        doAvaTaxSalesInvoice({ orderId, cartIdVal })
            .then((result) => {
                console.log('Status:', result.StatusCode);
            })
            .catch((error) => {
                console.log('Error occured in AvataxSalesInovice call', error);
            });
    }

    renderedCallback() {
        setTimeout(() => {
            const queryParams = new URLSearchParams(window.location.search);
            const orderId = queryParams.get('orderNumber');
            const cartIdVal = localStorage.getItem('cartId');
            if (orderId && cartIdVal) {
                console.log('OrderID - ' + orderId);
                this.avataxSalesInvoiceOrder(orderId, cartIdVal);
            }
        }, 10000);
    }
}