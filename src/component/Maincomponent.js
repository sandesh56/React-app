import React, { Component } from 'react';
import '../App.css';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetailcomponent';
import { DISHES } from '../shared/dishes';
import Headercomponent from './Headercomponent';
import Footer from "./Footer";
class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onChange(dishId) {
    console.log('done')
    this.setState({ selectedDish: dishId });
  }

  render() {
    return (
      <div className="Menu">
        <Headercomponent />
        <Menu dishes={this.state.dishes}
          onClick={(dishId) => this.onChange(dishId)} />
        <Dishdetail dishes={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main