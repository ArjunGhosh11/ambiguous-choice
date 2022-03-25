import React from 'react';
import './Cart.css'
const Cart = (props) => {
    return (
        <div>
            <h2>Selected Items:{props.cart.length}</h2>
        </div>
    );
};

export default Cart;