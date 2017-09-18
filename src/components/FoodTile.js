import React from 'react';

const FoodTile = () => {
  return(
    <li>
      {food}
      <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </li>
  )
}
