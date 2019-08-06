import React from 'react'
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
    const transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        //console.log(props.ingredients); // {bacon: 1, cheese: 2, meat: 2, salad: 1}
        //console.log(Object.keys(props.ingredients)); // ["bacon", "cheese", "meat", "salad"]
        //console.log(igKey); //bacon, cheese, meat, salad
        //console.log([...Array(props.ingredients[igKey])]); // [undefined] or [undefined, undefined]
        console.log(props.ingredients[igKey]);
        return [...Array(props.ingredients[igKey])].map((_, i) => {
            //console.log(i); // 0, 0 , 1, 0, 1, 0
            return <BurgerIngredient key={igKey + i} type={igKey} />;
        })
    })
    return (
        <div className='burger'>
            <BurgerIngredient type='bread-top'/>
            {transformedIngredients}
            <BurgerIngredient type='bread-bottom'/>
        </div>
    )
}

export default Burger;
