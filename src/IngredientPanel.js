import React, { Component } from 'react';
import IngredientItem from './IngredientItem.js';
import ingredients from './Ingredients.js';

class IngredientPanel extends Component {
    render() { 
        return ( 
        <div className='ingredient-panel'>
            {ingredients.map(item => {
                return <IngredientItem key={item.id} amount={item.amount} item={item.item} />
            })}
        </div>
         );
    }
}
 
export default IngredientPanel;