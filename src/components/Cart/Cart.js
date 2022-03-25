import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, products } = props;

    const names = cart.filter(item => products.id === item);
    console.log(names);
    return (
        <div className='cart'>
            <h2>Selected Items: {cart.length}</h2>
            {cart.map(product => <div className='list-item'><img src={product.img} alt="" /> <h5> {product.name}</h5></div>)}
            <button className='choose-button'>CHOOSE AN ITEM</button>
        </div>
    );
};

export default Cart;