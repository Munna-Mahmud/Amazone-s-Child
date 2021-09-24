import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'

import './Product.css'
import Rating from 'react-rating';

const Product = (props) => {
    const { name, img, seller, price, stock, star } = props.product
    const cartIcons = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className="prouct">
            <div>
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className="product-name">{name}</h4>
                <p><small>By: {seller}</small></p>
                <p>Price :{price}</p>
                <Rating className="rating"
                    initialRating={star}
                    emptySymbol="far fa-star icon-color"
                    fullSymbol="fas fa-star icon-color"
                    readonly> </Rating>
                <p><small>Only {stock} left in stock -order soon</small></p>
               
                <button onClick={() => props.handleAddToCart(props.product)} className="purchase-btn"> {cartIcons}add to cart</button>
            </div>
        </div>
    );
};

export default Product;