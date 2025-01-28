import { LightningElement, api, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getProductMediaDetails from '@salesforce/apex/ProductController.getProductMediaDetails';

export default class ProductDetails extends NavigationMixin(LightningElement) {
    @api productId; // Product ID from XML property
    @api imageUrl; // Image URL from XML property
    @api imageOnRight = false; // Checkbox property for image alignment
    @api cmsContent; // CMS Content property

    productName;
    productDescription;
    productMediaList = [];
    alignmentClass = 'left-aligned'; // Default alignment class

    // Wire to fetch product media details dynamically
    @wire(getProductMediaDetails, { productId: '$productId' })
    wiredProductMedia({ error, data }) {
        if (data) {
            if (data.length > 0) {
                this.productMediaList = data;
                this.productName = data[0].Name;
                this.productDescription = data[0].Description;
            }
        } else if (error) {
            console.error('Error fetching product media details:', error);
        }
    }

    // Lifecycle hook to set the alignment class dynamically
    connectedCallback() {
        this.updateAlignmentClass();
    }

    // Watch for changes to the checkbox value
    renderedCallback() {
        this.updateAlignmentClass();
    }

    // Update the alignment class based on the checkbox
    updateAlignmentClass() {
        this.alignmentClass = this.imageOnRight ? 'right-aligned' : 'left-aligned';
    }

    // Handle Product Click to navigate to the standard Product Detail Page
    handleProductClick() {
        const productId = this.productId;

        this[NavigationMixin.Navigate]({
            type: 'standard__recordPage',
            attributes: {
                recordId: productId,
                objectApiName: 'Product2', // Replace with the correct API name of the Product object
                actionName: 'view',
            },
        });
    }

    get hasCmsContent() {
        return !!this.cmsContent; // Check if CMS content is selected
    }
}