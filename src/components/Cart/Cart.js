import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {

    const { cart, deleteItems } = props;

    console.log('Cart:', cart);
    const [selectedItem, setSelectedItem] = useState({});
    const [className, setClassName] = useState('selected-item-empty');
    const chooseItem = () => {
        if (cart.length == 0) {
            alert('PLEASE SELECT ITEMS!!');
        }
        else {
            const len = cart.length;
            console.log(len);
            const randomIndex = (Math.floor(Math.random() * len));
            console.log(randomIndex);
            setSelectedItem(cart[randomIndex]);
            console.log("selected:", selectedItem);
            setClassName('selected-item');
        }
    }



    return (
        <div className='cart'>
            <h2>Selected Items: {cart.length}</h2>
            {cart.map(product => <div className='list-item' key={product.id}><img src={product.img} alt="" /> <h5> {product.name}</h5></div>)}
            <button className='choose-button' onClick={chooseItem}>CHOOSE AN ITEM</button>
            <div className={className}>
                <h5>YOU SHOULD TAKE:</h5>
                <div className='list-item'><img src={selectedItem.img} alt="" /> <h5> {selectedItem.name}</h5></div>
            </div>
            <button className='delete-button' onClick={deleteItems}>SELECT AGAIN</button>
        </div>
    );
};

export default Cart;