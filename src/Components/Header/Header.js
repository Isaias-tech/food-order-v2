import React, { Fragment } from 'react';
import classes from './Header.module.css';
import mealImage from '../../Assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onShowCart={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealImage} alt="Meals" />
            </div>
        </Fragment>
    );
}

export default Header;