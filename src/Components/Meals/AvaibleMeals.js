import React from 'react';
import Card from '../UI/Card';
import classes from './AvaibleMeals.module.css';
import DUMMY_MEALS from '../../helper/DummyMeals';
import MealItem from './MealsItem/MealItem';

const AvaibleMeals = () => {
    const meals = <ul>
    {DUMMY_MEALS.map((item) => {
        return (
            <MealItem key={item.id} id={item.id} name={item.name} description={item.description} price={item.price} label='Amount: ' />
        );
    })}
    </ul>

    return (
        <section className={classes.meals}>
            <Card>
                {meals}
            </Card>
        </section>
    );
}

export default AvaibleMeals;
