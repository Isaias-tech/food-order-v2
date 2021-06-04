import React, { useRef, useContext } from 'react';
import classes from './MealItemForm.module.css';
import Input from '../../UI/Input';
import CartContext from '../../../Store/cart-context';

const MealItemForm = (props) => {
    const cartCtx = useContext(CartContext);

    const inputRef = useRef();

    const submitFormHandler = (event) => {
        event.preventDefault();
        const item = {
            id: props.id,
            name: props.item.name,
            price: props.item.price,
            amount: inputRef.current.value
        };
        cartCtx.addItem(item);
    };

    return (
        <form className={classes.form} onSubmit={submitFormHandler}>
            <Input ref={inputRef} label={props.label} input={{ id: 'amount_' + props.id, type: 'number', min: '1', max: '5', step: '1', defaultValue: '1' }}/>
            <button>+ Add</button>
        </form>
    );
}

export default MealItemForm;
