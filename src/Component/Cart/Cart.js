import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;
    // const totalReducer = (previous, product) =>
    //    (previous + product.price);
    // const total = cart.reduce(totalReducer, 0);

let totalQuantity = 0
    let total = 0;
    for (const product of cart){
        if (!product.quantity){
            product.quantity= 1;
        }
        // product.quantiy = !product.quantity ? 1: product
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }

    const shipping = total > 0 ? 15 : 0;
    const tax =(total + shipping )* 0.10;
    const grandTotal = total + shipping + tax;

    return (
        <div className="cart-summary">
            <h3>Order Summary</h3>
            <h4>Item Orders {totalQuantity} </h4>
            <p>ToTal : ${total.toFixed(2)}</p>
            <p>Shiping : ${shipping}</p>
            <p>Tax : ${tax.toFixed(2)}</p>
            <p>Grand Total : ${grandTotal.toFixed(2)}</p>
            <button>Purchase</button>
        </div>
    );
};

export default Cart;