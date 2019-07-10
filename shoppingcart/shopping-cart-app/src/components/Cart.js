import React, { Component } from 'react';
import {connect} from 'react-redux';
import deleteProduct from '../actions/deleteProduct';

//STEP 16: MAKE A CART TO DISPLAY AND ALSO TO BE ABLE TO DELETE
//STEP 17: made a delete function in the actions folder
//STEP 20a: ADD DELETE FUNCTION TO ONCLICK
//STEP 21: npm install react-router-dom
//STEP 22 ADDED BASELAYOUT 
class Cart extends Component {
  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>#</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.productCart.map((productObj)=>{
                return <tr key={productObj.productName}>
                  <td>{productObj.productName}</td>
                  <td>{productObj.productPrice}</td>
                  <td onClick={()=>{this.props.onDeleteProduct({
                    productName: productObj.productName, 
                    productPrice: productObj.productPrice
                  })
                    }}>Remove</td>
                  
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
    totalCost: state.totalCost,
    productCart: state.productCart
  }
}


let mapDispatchToProps = (dispatch) => {
  return {
      onDeleteProduct: (productData) => dispatch(deleteProduct(productData))
  }
}
const connectComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart)

export default connectComponent