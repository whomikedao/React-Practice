import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => {
  return (
    <div>
      
      <Link to="/">Home</Link> | 
      <Link to="/cart">Cart</Link> 
      <br />
      {props.children}

    </div>
  )
}