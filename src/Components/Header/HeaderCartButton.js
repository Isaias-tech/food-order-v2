import React, { useContext, useState, useEffect } from 'react';
import classes from './HeaderCartButton.module.css';
import CartIcon from '../Cart/CartIcon';
import CartContext from '../../Store/cart-context';

const HeaderCartButton = (props) => {
    const { items } = useContext(CartContext);
    const [bump, setBump] = useState(false);

    const btnClasses = `${classes.button} ${bump ? classes.bump : ''}`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        };
        setBump(true);
        const bumpTime = setTimeout(() => {
            setBump(false);
        }, 300)
        return () => {
            clearTimeout(bumpTime);
        };
    }, [items])

    return (
        <button className={btnClasses} onClick={props.onShowCart}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>
                Your Cart
            </span>
            <span className={classes.badge}>{items.length}</span>
        </button>
    );
}

export default HeaderCartButton;
