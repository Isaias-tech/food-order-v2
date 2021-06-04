import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultContext = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingIndexItem = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingIndexItem];
        if (existingItem) {
            let newValue = [...state.items];
            const amount = +state.items[existingIndexItem].amount + +action.item.amount
            const newAmount = {...action.item, amount: amount}
            newValue[existingIndexItem] = newAmount;
            return {
                items: newValue,
                totalAmount: 1
            }
        } else {
            const newValue = state.items.concat(action.item);
            return {
                items: newValue,
                totalAmount: 2
            }
        }
    };
    return defaultContext
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultContext);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: () => { }
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
