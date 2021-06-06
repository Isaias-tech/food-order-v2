import React, { useReducer } from 'react';
import CartContext from './cart-context';

const defaultContext = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    if (action.type === 'ADD') {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.item.id);
        const existingItem = state.items[existingItemIndex];
        let items;
        if (existingItem) {
            let newAmount = 0;
            if (action.item.amountItem) {
                newAmount = +existingItem.amount + 1;
            } else {
                newAmount = +existingItem.amount + +action.item.amount;
            }
            let newItem = { ...existingItem, amount: newAmount };
            console.log(newItem)
            items = [...state.items];
            items[existingItemIndex] = newItem;
        } else {
            items = state.items.concat(action.item);
        }
        console.log(items)
        return {
            items: [...items],
            totalAmount: 0
        };
    };
    if (action.type === 'REMOVE') {
        const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
        const existingItem = state.items[existingItemIndex];
        let removeItem;
        if (+existingItem.amount === 1) {
            removeItem = [...state.items].filter((item) => item.id !== action.id);
        } else {
            removeItem = state.items
            removeItem[existingItemIndex] = { ...existingItem, amount: +existingItem.amount - 1 }
        };
        return {
            items: removeItem,
            totalAmount: 0  
        };
    };
    return defaultContext
};

const CartProvider = (props) => {
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultContext);

    const addItemHandler = (item) => {
        dispatchCartAction({ type: 'ADD', item: item });
    };

    const removeItemHandler = (id) => {
        dispatchCartAction({ type: 'REMOVE', id: id });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemHandler,
        removeItem: removeItemHandler
    }

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
