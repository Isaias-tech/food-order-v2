import React, { Fragment } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = (props) => {
    const totalAmount = `$00.00`;

    const cartItems = <CartItem />;

    const orderHandler = () => {
        console.log('Ordering...');
        props.onHideCart();
    };

    return (
        <Fragment>
            <Modal onHideCart={props.onHideCart}>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount:</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']} onClick={props.onHideCart} >Cancel</button>
                    <button className={classes.button} onClick={orderHandler} >Order</button>
                </div>
            </Modal>
        </Fragment>
    );
}

export default Cart;
