import React, { Component } from 'react';


class IngredientsList extends Component {
    render() { 
        return ( 
        <label>
            <input type='checkbox'></input>
            {this.props.amount} {this.props.item}
        </label>
         );
    }
}
 
export default IngredientsList;