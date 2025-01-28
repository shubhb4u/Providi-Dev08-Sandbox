public with sharing class ProductController {
    @AuraEnabled(cacheable=true)
    public static List<Product2> getProductMediaDetails(Id productId) {
        // Fetch related ProductMedia records
        List<Product2> Productlist = [
            SELECT Id,Name,Description FROM Product2
            WHERE Id = :productId AND isActive=true];

        // Return the ProductMedia records
        return Productlist;
    }
}