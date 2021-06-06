import React, { Fragment } from 'react';
import ReactDom from 'react-dom';
import classes from './Modal.module.css';


const BackDrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.onHideCart}></div>
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>
                {props.children}
            </div>
        </div>
    );
};

const Modal = (props) => {
    const cartModal = document.getElementById('cartModal');
    return (
        <Fragment>
            {ReactDom.createPortal(<BackDrop onHideCart={props.onHideCart}/>, cartModal)}
            {ReactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, cartModal)}
        </Fragment>

    );
}

export default Modal;
