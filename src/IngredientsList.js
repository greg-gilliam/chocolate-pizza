import React, { Component } from 'react';
// import ListBg from './list-bg.png';

class IngredientsList extends Component {
    render() { 
        return ( 
        <label>
            <input type='checkbox' />
            {this.props.amount}{this.props.item}
        </label>
         );
    }
}
 
export default IngredientsList;