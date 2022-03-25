import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, products } = props;

    return (
        <div>
            <h2>Selected Items:{cart.length}</h2>
        </div>
    );
};

export default Cart;