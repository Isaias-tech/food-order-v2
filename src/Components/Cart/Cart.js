import React, { Fragment } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';

const Cart = () => {
    const totalAmount = `$00.00`;

    const cartItems = <CartItem />;

    return (
        <Fragment>
            <Modal>
                {cartItems}
                <div className={classes.total}>
                    <span>Total Amount:</span>
                    <span>{totalAmount}</span>
                </div>
                <div className={classes.actions}>
                    <button className={classes['button--alt']}>Cancel</button>
                    <button className={classes.button}>Order</button>
                </div>
            </Modal>
        </Fragment>
    );
}

export default Cart;
