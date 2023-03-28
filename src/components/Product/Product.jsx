import React from 'react';
import './Product.css'

const Product = (props) => {
    const { name, seller, price, ratings, img, quantity } = props.product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <div className='product-name-price'>
                    <h6 className='product-name'>{name}</h6>
                    <p className='product-price'>Price: ${price}</p>
                </div>
                <p className='product-seller'>Manufactures: {seller}</p>
                <p className='product-ratings'>Ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to Cart</button>
        </div>
    );
};

export default Product;