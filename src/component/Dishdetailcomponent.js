import React, { Component } from "react";
import "../App.css";
import { Card, CardImg, CardTitle, CardText, CardBody, Button, Modal, ModalHeader, ModalBody } from "reactstrap";
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import CommentForm from './CommentForm';

class Dishdetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModelopen: false,
    };
    this.toggleModel = this.toggleModel.bind(this);

    //(**** optional****) for checking emty props
    this.dish = props.dishes;
    if (this.dish === null || this.dish === undefined) {
      return <div></div>;
    }
    this.comments = props.comments;
    if (this.comments === null || this.comments === undefined) {
      return <div></div>;
    }
  }

  //this is for toggeling a model
  toggleModel = () => {
    this.setState({ isModelopen: !this.state.isModelopen });
  }

  //rendering dish is here
  renderdish = (dish) => {
    return (
      <div className="col-12 col-md-5 mt-4 mb-5">
        <Card>
          <CardImg width="10px" object src={dish.image} alt={dish.name} />
          <CardBody className='card-body'>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
  //for rendering a comment
  rendercomment = (comments) => {

    return (
      <div className="col-sm-12 col-md-5 mt-4">
        <div>
          <h5> Comments</h5>
          <div className="mb-4" >
            {comments.map((comment) => {
              return (
                <div key={comment.id} className="m-2">
                  <p>{comment.id} <br />
                    {comment.comment}<br />
                    {`-- ${comment.author} ,
                        ${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' })
                        .format(new Date(Date.parse(comment.date)))}`}
                  </p>
                </div>
              );
            })}
          </div>
          <div>
            <Button type="submit" value="submit" className="fa fa-pencil lg"
              onClick={this.toggleModel} >
              Submit comment</Button>
          </div>
        </div>
      </div>
    );
  }

  // rendering all the views from here
  render() {
    return (

      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active >{this.dish.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className="col-12">
          <h3>{this.dish.name}</h3>
          <hr />
        </div>

        <div className="row">
          {this.renderdish(this.dish)}
          {this.rendercomment(this.comments)}
        </div>
        <div>
          <Modal isOpen={this.state.isModelopen} toggle={this.toggleModel}>
            <ModalHeader toggle={this.toggleModel}>
              Submit Comment
            </ModalHeader>
            <ModalBody>
              <CommentForm />
            </ModalBody>
          </Modal>
        </div>
      </div>
    );
  }
}

export default Dishdetail;
