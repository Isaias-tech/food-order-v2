import React, { Fragment, useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);
    let amount = 0;
    for (let i = 0; i < cartCtx.items.length; i++) {
        amount += +cartCtx.items[i].amount * +cartCtx.items[i].price
    }

    const totalAmount = `$${amount.toFixed(2)}`;

    const cartItems = cartCtx.items.map((item) => {
        return <CartItem key={item.id} name={item.name} price={item.price} amount={item.amount} />
    });

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
