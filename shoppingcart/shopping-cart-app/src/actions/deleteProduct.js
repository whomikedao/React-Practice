
//STEP 18: MAKE DELETE PRODUCT
//item takes the whole thing
//then go to cart reducer for step 19
let deleteProduct = (item)=>{
    return{
        type: 'deleteProduct',
        productData: {
            productName: item.productName,
            productPrice: item.productPrice
        }
    }
}

export default deleteProduct