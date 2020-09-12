import React, { Component } from "react";
import '../App.css';
import {
  Card,
  CardImg,
  CardTitle,
  CardBody,
} from "reactstrap";


class Menu extends Component {
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 mt-2">
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)}>
            <CardImg width="100%" object src={dish.image} alt={dish.name} />

            <CardBody className='card-body'>
              <CardTitle>{dish.name}</CardTitle>
            </CardBody>
          </Card>
        </div>
      );
    });

    return (
      <div className="container">
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu
