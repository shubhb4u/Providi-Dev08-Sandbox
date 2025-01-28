import { LightningElement, wire, track, api } from 'lwc';
import { CurrentPageReference } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { CheckoutInformationAdapter, simplePurchaseOrderPayment, placeOrder, authorizePayment } from "commerce/checkoutApi";

import getCartItems from '@salesforce/apex/StripePaymentHelper.getCartItems';
import sendPaymentRequest from '@salesforce/apex/StripePaymentHelper.sendPaymentRequest';

export default class StripeProductListCmp extends LightningElement {
    
    //=====================================Added by Shubham for Stripe WIRE ACH payemnts=====================================================

    error;
    records;
    totalPrice = 0;
    recordId;
    isProcess = false;
    isDisabled = false;
    cartId;
    isWire = false;

    @wire(CheckoutInformationAdapter, {})
    checkoutInfo({ error, data }) {
        if (data) {
            console.log("Data received from cehckout Information adapter -->> : ", JSON.stringify(data));
            // this.checkoutId = data.checkoutId;
            // console.log("Checkout ID: ", this.checkoutId);

            // if (data?.deliveryGroups?.items?.[0]?.deliveryAddress) {
            //     this.shippingAddress = data?.deliveryGroups?.items?.[0]?.deliveryAddress;
            // } else {
            //     this.shippingAddress = this.staticShippingAddress;
            // }

        } else if (error) {
            console.error("Error fetching checkout information: ", JSON.stringify(error));
            // Optionally, display an error message to the user
        }
    }

    connectedCallback(){
        if(this.cartId){
            this.getCartitemsInfo();

        }
    }

    //For Quest review details page
    getCartitemsInfo() {
        if (this.cartId )
            getCartItems({ parentId: this.cartId })
                .then((result) => {
                    this.records = result;
                    console.log('records  from carti items->> ' + JSON.stringify(this.records));
                    this.totalPrice = 'Pay($' + result.reduce((sum, rec) => sum + rec.TotalPrice, 0) + ')';
                    if(this.records){
                        this.authorizePaymentWire();
                    }
                })
                .catch((error) => {
                    console.error('Error: ', error);
                });

    }


    async authorizePaymentWire() {

        // await authorizePayment({
        //     checkoutId: this.checkoutId,
        //     tokenResponse: '121312323',
        //     billingAddress: this.staticShippingAddress
        // }).then(response => {
        //     // authorization is complete, move to complete the order
        //     this.handlePay();
        //     return true;
        // }).catch(error => {
        //     return false;
        // });

        this.handlePay();
    }

    handlePay() {

        // let orderResponse =  placeOrder();
        // console.log("Order placed successfully:-->>>", JSON.stringify(orderResponse));
        // this.getOrderId();

        this.isProcess = true;
        this.isDisabled = true;
        const dataJson = JSON.stringify(this.records);
        console.log('dataJson -->> ' + dataJson);
        sendPaymentRequest({ productsJson: dataJson })
            .then((result) => {
                this.isProcess = false;
                console.log('Payment request successfully sent');
            })
            .catch((error) => {
                this.isProcess = false;
                this.isDisabled = false;
            });


    }
}