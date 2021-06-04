import React from 'react';
import classes from './Input.module.css';

const Input = (props) => {
    return (
        <div className={classes.input}>
            <label htmlFor={`input_${props.id}`}>{props.label}</label>
            <input {...props.input} />
        </div>
    );
}

export default Input;
