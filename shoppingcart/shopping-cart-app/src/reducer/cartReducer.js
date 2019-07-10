
//STEP 8: STATE 
let cartReducer = (state, action) =>{
    if(state === undefined){
        state = {
            totalCost: 0,
            productCart: []
        }
    }
    //STEP 9: ADD THE ACTION
    switch(action.type){
        case 'addProduct':
        console.log(state.productCart);
        //updates the totalCost calling from two different places
            return{
                totalCost: state.totalCost + parseInt(action.productData.productPrice),
                productCart: state.productCart.concat({
                    //concatenating on object
                    productName: action.productData.productName,
                    productPrice: action.productData.productPrice
                })
            }
        //STEP 19: ADD THE DELETE CASE
        case 'deleteProduct':
            let updatedArray = state.productCart.filter((productState)=>{
                return productState.productName !== action.productData.productName
            })
            return{
                ...state,
                totalCost: state.totalCost - parseInt(action.productData.productPrice),
                productCart: updatedArray
            }
        default:
            return state
    }
}

//STEP 10: UPDATE STORE IN INDEX.JS
export default cartReducer