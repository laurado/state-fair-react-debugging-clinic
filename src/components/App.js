import React, { Component } from 'react';
import FoodList from './FoodList';
import FoodForm from './FoodForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      foodData: [
        { key: 1, food: "Cheese Curds" },
        { key: 2, food: "Deep Fried Pickles" },
        { key: 3, food: "Bucket of Cookies" }
      ],
      newFood: ''
    }

    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleClick(event) {
    alert('Button was clicked')
  }

  handleChange(event) {
    let foodInput = event.target.value;
    this.setState({ newFood: foodInput })
  }

  handleSubmit(event) {
    event.preventDefault();
    let newKey = this.state.foodData.length + 1
    let newFoodPayload = {
      key: newKey,
      food: this.state.newFood
    }
    let newFoodsArray = this.state.foodData.concat(newFoodPayload)
    this.setState({
      foodData: newFoodsArray,
      newFood: ''
    })
  }

  render() {
    return(
      <div>
        <h1>State Fair Noms</h1>

        <FoodList foods={this.state.foodData} handleButtonClick={this.handleClick}/>
        <FoodForm handleChange={this.handleChange} handleSubmit={this.handleSubmit} newFood={this.state.newFood}/>
      </div>
    );
  }
};

export default App;
