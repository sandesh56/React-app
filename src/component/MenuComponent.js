import React, { Component } from "react";
import '../App.css';
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";


function RenderDishdetail({ dish, onClick }) {
  return (
    <Card onClick={() => onClick(dish.id)}>
      <CardImg width="100%" object src={dish.image} alt={dish.name} />
      <CardBody className='card-body'>
        <CardTitle>{dish.name}</CardTitle>
      </CardBody>
    </Card>
  );
}


const Menu = (props) => {
  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-2">
        <RenderDishdetail dish={dish} onClick={props.onClick} />
      </div>
    );

  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
    </div>
  );
}


export default Menu
