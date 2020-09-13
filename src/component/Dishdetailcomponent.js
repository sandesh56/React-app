import React, { Component } from "react";
import "../App.css";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";



const renderdish = (dish) => {
  return (
    <div className="col-12 col-md-5 mt-2">
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

const rendercomment = (dish) => {

  return (
    <div className="col-sm-12 col-md-5 mt-2">
      <Card>
        <h5>Comments</h5>
        {dish.comments.map((comment) => {
          return (
            <div key={comment.id}>
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


  return (

    <div className="container">
      <div className="row">
        {renderdish(dish)}
        {rendercomment(dish)}
      </div>
    </div>

  );
}

export default Dishdetail;
