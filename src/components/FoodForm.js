import React from 'react';

const FoodForm = props => {
  return(
    <form onSubmit={props.handleSubmit}>
      <input type='text' placeholder='Add a Food' value={props.newFood} onChange={props.handleChange} />
      <input type='submit' value='Add to List' />
    </form>
  )
}

export default FoodForm;
