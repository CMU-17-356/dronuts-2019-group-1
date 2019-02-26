import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cart extends Component {
  render() {
    return (
    	<div>
	      	<p>Cart</p>
	      	<Link to='/location'>
	      		Location Page 
	      	</Link>
        </div>
    );

  }

}

export default Cart;
