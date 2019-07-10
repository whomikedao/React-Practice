//STEP 6:
//Only need to do method then export this action to dispatch
let addProduct = (item) => {
    //this passes the item components of product name and price
    return{
        //EVERY ACTION HAS A TYPE
        type: 'addProduct',
        productData: {
            productName: item.productName,
            productPrice: item.productPrice
        }
    };    
}
//STEP 7: then you need a reducer for addProduct
//this will take it to the global state and update it

export defaults addProduct;