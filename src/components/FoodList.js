import React from 'react';
import FoodTile from './FoodTile';

const FoodList = (props) => {
  let foods = props.foods.map(foodItem => {
    return(
      <FoodTile
        key={foodItem.key}
        food={foodItem.food}
        handleButtonClick={props.handleButtonClick}
      />
    )
  })

  return(
    <ul>
      {foods}
    </ul>
  );
};

export default FoodList;
