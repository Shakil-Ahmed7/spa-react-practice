import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
    let totalPrice = 0;
    let totalShipping = 0;
    let quantity = 0;
    for(const product of cart){
        console.log(product)
        totalPrice =totalPrice + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping;
        quantity = quantity + product.quantity;
    }

    const tax = ((totalPrice) * 5) /100;

    const grandTotal = totalPrice + totalShipping + tax;


    return (
        <div className='cart'>
            <h5 className='order-title'>Order Summary</h5>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${totalPrice}</p>
            <p>Total Shipping Charge: ${totalShipping}</p>
            <p>Tax: ${tax}</p>
            <h6>Grand Total: ${grandTotal}</h6>
        </div>
    );
};

export default Cart;