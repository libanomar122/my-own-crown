import React from 'react'
import './checkout-item.styles.scss';
import { CartContext } from '../contexts/cart.context';
import { useContext } from 'react';

const CheckoutItem = ({ cartItem }) => {
    const { addItemToCart, removeItemFromcart, clearItemFromCart } = useContext(CartContext);
    const { name, imageUrl, price, quantity } = cartItem;

    const removeItemHandler = () => removeItemFromcart(cartItem);
    const addItemHandler = () => addItemToCart(cartItem);
    const clearItemHandler = () => clearItemFromCart(cartItem);

    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={removeItemHandler}>&#10094;</div>
                {quantity}
                <div className='arrow' onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={clearItemHandler}>&#10005;</div>
            <hr />
        </div>
    )
}

export default CheckoutItem;