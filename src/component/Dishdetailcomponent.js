import React, { Component } from "react";
import "../App.css";
import { Card, CardImg, CardTitle, CardText, CardBody } from "reactstrap";

class Dishdetail extends Component {
  render() {
    const dish = this.props.dishes;
    if (dish === null || dish === undefined) {
      return <div></div>;
    }

    return (
      <div className="row">
        <div className="col-sm-12 col-md-5 m-2">
          <Card>
            <CardImg object src={dish.image} alt={dish.name} />
            <CardBody>
              <CardTitle>{dish.name}</CardTitle>
              <CardText>{dish.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div className="col-sm-12 col-md-6 m-1">
          <h4>Comments</h4>
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
        </div>
      </div>
    );
  }
}
export default Dishdetail;
