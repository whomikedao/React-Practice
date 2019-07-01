import React, { Component } from 'react';



class Products extends React.Component {
    constructor(props) {
        super(props);
    }
 }

 render() {

     let productList = this.props.products.map((product)=>{
         return <li>(product)</li>

     })
     return (
         <div>
             <ul>
                 {productList}
            </ul>
        </div>
    );      
 }

 export default App;