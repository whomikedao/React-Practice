
//STEP 8: STATE 
let cartReducer = (state, action) =>{
    if(state === undefined){
        state = {
            totalCost: 0,
            productCart: [
                {
                    productName: '',
                    productPrice: 0
                }
            ]
        }
    }
    //STEP 9: ADD THE ACTION
    switch(action.type){
        case 'addProduct':
        console.log(state.productCart);
        //updates the totalCost calling from two different places
            return{
                totalCost: state.totalCost + action.productData.productPrice,
                productCart: state.productCart.concat({
                    //concatenating on object
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        default:
            return state
    }
}

//STEP 10: UPDATE STORE IN INDEX.JS
export default cartReducer