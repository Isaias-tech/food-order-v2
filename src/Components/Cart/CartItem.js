import React from 'react';
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;

    const addItemHandler = () => {
        const item = { amount: props.amount, name: props.name, price: props.price, id: props.id, amountItem: true };
        props.addItem(item);
    };

    const removeItemHandler = () => {
        props.removeItem(props.id)  
    };
    
    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={removeItemHandler}>−</button>
                <button onClick={addItemHandler}>+</button>
            </div>
        </li>
    );
}

export default CartItem;
