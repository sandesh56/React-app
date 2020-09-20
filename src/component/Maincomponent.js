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
import { addComment, fetchDishes } from '../Redux/CrateAction';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }

}
const mapDispatchToProps = (dispatch) => ({
  addComment: (dishId, rating, comment, author) => dispatch(addComment(dishId, rating, comment, author)),
  fetchDishes: () => { dispatch(fetchDishes()) },
  resetInitialFeedback: () => { dispatch(actions.reset('feedback')) }
});

class Main extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount = () => {
    this.props.fetchDishes();
  }


  render() {
    const HomePage = () => {
      return <Home dishes={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
        isLoading={this.props.dishes.isLoading}
        errmess={this.props.dishes.errmess}
        promotions={this.props.promotions.filter((promo) => promo.featured)[0]}
        leaders={this.props.leaders.filter((lead) => lead.featured)[0]}
      />

    };

    const Dishwithid = ({ match }) => {
      return (
        <Dishdetail dishes={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          errmess={this.props.dishes.errmess}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          addComment={this.props.addComment} />
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
            component={() => <Menu dishes={this.props.dishes.dishes}
              isLoading={this.props.dishes.isLoading}
              errmess={this.props.dishes.errmess} />}
          />
          <Route path="/menu/:dishId" component={Dishwithid} />
          <Route path='/contactus' component={() => <Contact resetInitialFeedback={this.props.resetInitialFeedback} />} />
          <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
