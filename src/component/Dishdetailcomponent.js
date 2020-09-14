import React, { Component } from "react";
import "../App.css";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";


const renderdish = (dish) => {
  return (
    <div className="col-12 col-md-5 mt-4">
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody className='card-body'>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

const rendercomment = (comments) => {

  return (
    <div className="col-sm-12 col-md-5 mt-4">
      <Card>
        <h5> Comments</h5>
        {comments.map((comment) => {
          return (
            <div key={comment.id} className="m-2">
              <p>{comment.id}</p>
              <p>{comment.comment}</p>
              <p>{`-- ${comment.author} ,
                      ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                  .format(new Date(Date.parse(comment.date)))}`}
              </p>
            </div>
          );
        })}
      </Card>
    </div>
  );
}






function Dishdetail(props) {

  const dish = props.dishes;
  if (dish === null || dish === undefined) {
    return <div></div>;
  }
  const comments = props.comments;
  if (comments === null || comments === undefined) {
    return <div></div>;
  }


  return (

    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active >{dish.name}</BreadcrumbItem>
        </Breadcrumb>
      </div>
      <div className="col-12">
        <h3>{dish.name}</h3>
        <hr />
      </div>
      <div className="row">
        {renderdish(dish)}
        {rendercomment(comments)}
      </div>
    </div>

  );
}

export default Dishdetail;
