import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    for(const product of cart){
        totalPrice =totalPrice + product.price;
        totalShipping = totalShipping + product.shipping;
    }

    const tax = ((totalPrice) * 5) /100;

    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='cart'>
            <h5 className='order-title'>Order Summary</h5>
            <p>Selected Items: {cart.length}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;