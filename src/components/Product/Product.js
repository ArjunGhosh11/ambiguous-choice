
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Product.css';
const Product = (props) => {
    const { handleAddToCart, product } = props
    const { name, price, img } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h3>Name: {name}</h3>
                <p>Price: ${price}</p>
            </div>
            <button onClick={() => handleAddToCart(product)} className='add-button'>Add Item <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </button>
        </div>
    );
};

export default Product;