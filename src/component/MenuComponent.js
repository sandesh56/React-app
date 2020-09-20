import React, { Component } from "react";
import '../App.css';
import { Card, CardImg, CardTitle, CardBody } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import { Loading } from './Loading';



function RenderDishdetail({ dish, onClick }) {
  return (
    <Link to={`/menu/${dish.id}`}>
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody className='card-body'>
          <CardTitle>{dish.name}</CardTitle>
        </CardBody>
      </Card>
    </Link>
  );
}


const Menu = (props) => {


  const menu = props.dishes.map((dish) => {
    return (
      <div key={dish.id} className="col-12 col-md-5 mt-2">
        <RenderDishdetail dish={dish} />
      </div>
    );

  });
  if (props.isLoading) {
    return (
      <div className="container">
        <div className="row">
          <Loading />
        </div>
      </div>
    );

  }

  else if (props.errmess) {
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4>{props.errmess}</h4>
          </div>
        </div>
      </div>
    );
  }

  else {
    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
            <BreadcrumbItem active >Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row row-content">{menu}</div>
      </div>
    );
  }
}


export default Menu
