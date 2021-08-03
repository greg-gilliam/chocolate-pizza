import React, { Component } from 'react';

import PrintIcon from './print-icon.png';
import ChocoPizza from './choco-pizza.png';
import ingredients from './ingredients.js';
import IngredientsList from './IngredientsList.js';

class Body extends Component {
    render() { 
        return ( 
        <>
            <div id="title">
                <h1>Chocolate Pizza</h1>
                <h3>POSTED ON 15DEC2013 / DESSERTS</h3>
            </div>
            <div id="print">
                <img src={PrintIcon} alt='Print' />
                <h3>PRINT</h3>
            </div>
                 <img src={ChocoPizza} alt='Chocolate Pizza' />  
            <p>
                For the fig-swirl: melt butter over medium heat in a saucepan. Add Brown sugar and stir to dissolve. Halve all of the figs and toss in the saucepan with water and lemon juice. Cook over medium heat, stirring frequently, until you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.
            </p>
            <p>
                Ice cream: In a small pot over medium heat, combine milk, and granulated sugar until sugar is completely dissolved and the milk is just barely lukewarm. Whiskey in the egg yolks. Set mixture in the fridge and wait until the fig mixture is cooled.
            </p>
            <p>
                Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer instructions, i.e., let spin and thickin for 20 minutes before adding mascarpone, fig jam mixture, and the nuts. Continue to process for +/- 10 minutes. Pour semi-frozen mixture into a pyrex dish or glass tupperware. Freeze for at least two hours before serving. 
            </p>
            <div className='ingredient-panel'>
                {ingredients.map(item => {
                    return <IngredientsList key={item.id} amount={item.amount} item={item.item} />
                })}
            </div>
        </>

         );
    }
}
 
export default Body;