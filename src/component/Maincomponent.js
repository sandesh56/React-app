import React, { Component } from 'react';
import '../App.css';
import Home from './Home';
import Menu from './MenuComponent';
import Dishdetail from './Dishdetailcomponent';
import { DISHES } from '../shared/dishes';
import Headercomponent from './Headercomponent';
import Footer from "./Footer";
import { Switch, Redirect, Route } from 'react-router-dom';


class Main extends Component {

  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
    };
  }


  render() {

    const HomePage = () => {
      return (
        <Home />
      )
    }
    return (
      <div className="Menu">
        <Headercomponent />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main