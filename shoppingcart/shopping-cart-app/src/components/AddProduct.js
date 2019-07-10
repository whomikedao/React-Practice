import React from 'react';
import {connect} from 'react-redux';
import addProduct from '../actions/addProduct';

class AddProduct extends React.Component {
    constructor(props){
        super(props);

//STEP2: CREATE THE INITIAL VARIABLES
        this.state={
            productName: '',
            productPrice: 0,
            product: [{
                productName: '',
                productPrice: 0
            }]
        }
    }

//STEP 3: CREATE INITIAL FUNCTION/METHOD
    productNameChangeHandler = (e) => {
        this.setState({
            productName: e.target.value
        })
    }

//STEP 4: CREATE INITIAL FUNCTION/METHOD 
    productPriceChangeHandler = (e) => {
        this.setState({
            productPrice: e.target.value
        })
    }

//STEP 5: CREATE SUBMIT HANDLER
//THIS WILL CALL THE GLOBAL STATE
//(empty for now, go on to next steps in action folder)
    submitProductHandler = (e) => {
        e.preventDefault();

        //STEP 15: ADD THE PROPS I SUPPOSE?
        this.props.onAddProduct({
            productName: this.state.productName,
            productPrice: this.state.productPrice
        })
}
    
//STEP 1: CREATE THE SPACE
    render(){
        console.log(this.props.productCart);
        return(
            <div>
                <form onSubmit={this.submitProductHandler}>
                    <label>Product Name</label>
                    <input type ="text"
                        placeholder="Product Name"
                        onChange={this.productNameChangeHandler}/>

                    <label>Product Price</label>
                    <input type ="number"
                        placeholder="Product Price"
                        onChange={this.productPriceChangeHandler}/>
                    
                    <button>Submit</button>

                </form>
            </div>
            
        );
    }
}

//STEP 11: 
let mapStateToProps = (state) => {
    return{
        totalCost: state.totalCost,
        productCart: state.productCart
    }
}

//STEP 12:
let mapDispatchToProps = (dispatch) => {
    return{
        onAddProduct: (productData) => dispatch(addProduct(productData))
    }
}

//STEP 13:
const connectComponent = connect(
    mapStateToProps,
    mapDispatchToProps
)(AddProduct) //connecting AddProducts component

//STEP 14: originally export default AddProduct
export default connectComponent