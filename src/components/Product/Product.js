import React from 'react';
import './Product.css';
const Product = (props) => {
    const { name, price, img } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
        </div>
    );
};

export default Product;