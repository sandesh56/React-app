import React, { Component } from "react";
import "../App.css";
import Home from "./Home";
import Menu from "./MenuComponent";
import Contact from "./Contact";
import Dishdetail from "./Dishdetailcomponent";
import About from "./Aboutuscomponent";
import Headercomponent from "./Headercomponent";
import Footer from "./Footer";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }

}

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {

    };
  }


  render() {
    const HomePage = () => {
      return <Home dishes={this.props.dishes.filter((dish) => dish.featured)[0]}
        promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
        leaders={this.props.leaders.filter((lead) => lead.featured)[0]}
      />

    };

    const Dishwithid = ({ match }) => {
      return (
        <Dishdetail dishes={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))} />
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
            component={() => <Menu dishes={this.props.dishes} />}
          />
          <Route path="/menu/:dishId" component={Dishwithid} />
          <Route path='/contactus' component={Contact} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
