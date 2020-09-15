import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Menu from "./MenuComponent";
import Contact from "./Contact";
import Dishdetail from "./Dishdetailcomponent";
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS } from "../shared/promotions";
import About from "./Aboutuscomponent";
import Headercomponent from "./Headercomponent";
import Footer from "./Footer";
import { Switch, Redirect, Route } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      leaders: LEADERS,
      promotions: PROMOTIONS,
    };
  }


  render() {
    const HomePage = () => {
      return <Home dishes={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotions={this.state.promotions.filter((promo) => promo.featured)[0]}
        leaders={this.state.leaders.filter((lead) => lead.featured)[0]}
      />

    };

    const Dishwithid = ({ match }) => {
      return (
        <Dishdetail dishes={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
      );
    };
    return (
      <div className="Menu">
        <Headercomponent />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route
            exact
            path="/menu"
            component={() => <Menu dishes={this.state.dishes} />}
          />
          <Route path="/menu/:dishId" component={Dishwithid} />
          <Route path='/contactus' component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.state.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
