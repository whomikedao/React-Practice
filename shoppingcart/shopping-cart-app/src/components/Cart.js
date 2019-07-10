import React, { Component } from 'react';
import {connect} from 'react-redux';
import deleteProduct from '../actions/deleteProduct';

//STEP 16: MAKE A CART TO DISPLAY AND ALSO TO BE ABLE TO DELETE
//STEP 17: made a delete function in the actions folder
//STEP 20a: ADD DELETE FUNCTION TO ONCLICK
class Cart extends Component {
  render() {
    return (
      <div>
        <table>
          <thread>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>#</th>
            </tr>
          </thread>
          <tbody>
            {
              this.props.productCart.map((productObj)=>{
                return <tr key={productObj.productName}>
                  <td>{productObj.productName}</td>
                  <td>{productObj.productPrice}</td>
                  <td onClick={this.props.onDeleteProduct({
                    productName: productObj.productName, 
                    productPrice: productObj.productPrice
                  })
                    }>Remove</td>
                  
                </tr>
              })
            }
          </tbody>
        </table>
      </div>
    );
  }
}

//STEP 20: 
//ORIGINALLY:
// let mapStateToProps = (state) => {
//   return{
//       totalCost: state.totalCost,
//       productCart: state.productCart
//   }
// }
let mapStateToProps = (state) => {
  return {
    //takes a component and provides the updated component
    onDeleteProduct: (productData) => dispatch(deleteProduct(productData))
  }
}


let mapDispatchToProps = (dispatch) => {
  return{
      onAddProduct: (productData) => dispatch(addProduct(productData))
  }
}