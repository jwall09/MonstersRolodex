/*
Author: Max Wallace
Date:  8/23/2022 
Purpose: This is the JSX component for the monsters
cards-listing. 
*/

import { Component } from 'react';

import Card from '../card/card.component';
import './card-list.styles.css';

// setting const = monster like this allows
// us to destructure.

// using interpolation like this allows you
// to use the actual name of the monster
// as the alt text

class CardList extends Component {
  render () {
    const { monsters } = this.props;

    return (
      <div className='card-list'>
        {monsters.map((monster) => {

          return (
            <Card monster={monster} />
          )
        })}
      </div>
    );
  }
}

export default CardList;