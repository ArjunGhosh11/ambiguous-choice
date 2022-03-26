import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import React, { useState } from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart, deleteItems, deleteItem } = props;
    const [selectedItem, setSelectedItem] = useState({});
    const [className, setClassName] = useState('selected-item-empty');
    const chooseItem = () => {
        if (cart.length === 0) {
            alert('PLEASE SELECT ITEMS!!');
        }
        else {
            const len = cart.length;
            const randomIndex = (Math.floor(Math.random() * len));
            setSelectedItem(cart[randomIndex]);
            setClassName('selected-item');
        }
    }

    return (
        <div className='cart'>
            <h2>Selected Items: {cart.length}</h2>
            {cart.map(product => <div className='list-item' key={product.id}><div className='list-item-info'><img src={product.img} alt="" /> <h5> {product.name}</h5></div> <button className='single-delete-button' onClick={() => deleteItem(product)}><FontAwesomeIcon icon={faTrash}></FontAwesomeIcon></button></div>)}
            <button className='choose-button' onClick={chooseItem}>CHOOSE AN ITEM</button>
            <div className={className}>
                <h5>YOU SHOULD TAKE:</h5>
                <div className='list-item-info'><img src={selectedItem.img} alt="" /> <h5> {selectedItem.name}</h5></div>
            </div>
            <button className='delete-button' onClick={deleteItems}>SELECT AGAIN</button>
        </div>
    );
};

export default Cart;