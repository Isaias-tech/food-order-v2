import React, { Fragment, useContext } from 'react';
import Modal from '../UI/Modal';
import CartItem from './CartItem';
import classes from './Cart.module.css';
import CartContext from '../../Store/cart-context';

const Cart = (props) => {
    const cartCtx = useContext(CartContext);

    let amount = 0;

    cartCtx.items.forEach(item => {
        amount += +item.amount * +item.price
    });

    const totalAmount = `$${amount.toFixed(2)}`;

    const cartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item) => {
            return (
                <CartItem key={item.id} id={item.id} name={item.name} price={item.price} amount={item.amount} removeItem={cartCtx.removeItem} addItem={cartCtx.addItem} />
            )
        })}
    </ul>

    const orderHandler = () => {
        console.log('Ordering...');
        props.onHideCart();
    };

    console.log(cartCtx.items.length)

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
                    {cartCtx.items.length > 0 && <button className={classes.button} onClick={orderHandler} >Order</button>}
                </div>
            </Modal>
        </Fragment>
    );
};

export default Cart;