import React, { Fragment } from 'react';
import Header from './Components/Header/Header';
import Meals from './Components/Meals/Meals';

const App = () => {
    return (
        <Fragment>
            <Header />
            <main>
                <Meals />
            </main>
        </Fragment>
    );
}

export default App;