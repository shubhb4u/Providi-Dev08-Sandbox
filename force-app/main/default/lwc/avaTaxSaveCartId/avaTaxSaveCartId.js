import { LightningElement, wire } from 'lwc';
import { CartSummaryAdapter } from 'commerce/cartApi';

export default class AvaTaxSaveCartId extends LightningElement {

    // store cart Id locally to reuse on order confiramtion page
    @wire(CartSummaryAdapter)
    setCartSummary({ data, error }) {
        if (data) {
            this.cartId = data.cartId;
            localStorage.setItem('cartId', data.cartId);
        } else if (error) {
            console.error(error);
        }
    }
}