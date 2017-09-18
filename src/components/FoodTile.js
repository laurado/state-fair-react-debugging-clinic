import React from 'react';

const FoodTile = (props) => {
  return(
    <li>
      {props.food}
      <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  )
}

export default FoodTile;
