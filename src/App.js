import React, { Fragment, useState } from 'react';
import Cart from './Components/Cart/Cart';
import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';

const App = () => {
    const [showCart, setShowCart] = useState(false);

    const showCartHandler = () => {
        setShowCart(true);  
    };

    const hideCartHandler = () => {
        setShowCart(false);  
    };

    return (
        <Fragment>
            {showCart && <Cart onHideCart={hideCartHandler}/>}
            <Header onShowCart={showCartHandler}/>
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;