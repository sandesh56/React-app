import React, { Component } from 'react';
import { Breadcrumb, BreadcrumbItem, Form, Button, FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";
import { Link } from "react-router-dom";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: '',
            agree: false,
            contactType: 'Tel.',
            message: '',
            touched: {
                firstname: false,
                lastname: false,
                telnum: false,
                email: false
            }
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.onchangeHandle = this.onchangeHandle.bind(this);
    }


    onSubmit = (e) => {
        e.preventDefault();
    }

    onchangeHandle = (e) => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;

        this.setState({ [name]: value });;

    }
    handelBlur = (field) => (e) => {
        this.setState({
            touched: { ...this.state.touched, [field]: true }
        });
    }
    validate(firstname, lastname, telnum, email) {
        const error = {
            firstname: '',
            lastname: '',
            telnum: '',
            email: ''
        };
        if (this.state.touched.firstname && firstname.length < 3) {
            error.firstname = 'please enter more than three character';
        }
        else if (this.state.touched.firstname && firstname.length > 10) {
            error.firstname = 'input exceded.you could only have less than 10 character';
        }
        if (this.state.touched.lastname && lastname.length < 3) {
            error.firstname = 'please enter more than three letter';
        }
        if (this.state.touched.lastname && lastname.length > 10) {
            error.firstname = 'input exceded.you could only have less than 10 character';
        }
        const reg = /^\d+$/;
        if (this.state.touched.telnum && !reg.test(telnum))
            error.telnum = 'Tel. Number should contain only numbers';

        if (this.state.touched.email && email.split('').filter(x => x === '@').length !== 1)
            error.email = 'Email should contain a @';

        return error;
    }

    render() {

        const error = this.validate(this.state.firstname, this.state.lastname, this.state.telnum, this.state.email);

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem active >Contact Us</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>Contact Us</h3>
                        <hr />
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Location Information</h3>
                    </div>
                    <div className="col-12 col-sm-4 offset-sm-1">
                        <h5>Our Address</h5>
                        <address>
                            121, Clear Water Bay Road<br />
                        Clear Water Bay, Kowloon<br />
                        HONG KONG<br />
                            <i className="fa fa-phone"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope"></i>: <a href="mailto:confusion@food.net">confusion@food.net</a>
                        </address>
                    </div>
                    <div className="col-12 col-sm-6 offset-sm-1">
                        <h5>Map of our Location</h5>
                    </div>
                    <div className="col-12 col-sm-11 offset-sm-1">
                        <div className="btn-group" role="group">
                            <a role="button" className="btn btn-primary" href="tel:+85212345678"><i className="fa fa-phone"></i> Call</a>
                            <a role="button" className="btn btn-info"><i className="fa fa-skype"></i> Skype</a>
                            <a role="button" className="btn btn-success" href="mailto:confusion@food.net"><i className="fa fa-envelope-o"></i> Email</a>
                        </div>
                    </div>
                </div>
                <div className="row row-content">
                    <div className="col-12">
                        <h3>Send Us Your Feedback</h3>
                    </div>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup row>
                                <Label htmlFor="firstname" md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name here"
                                        value={this.state.firstname}
                                        valid={error.firstname === ""}
                                        invalid={error.firstname !== ""}
                                        onBlur={this.handelBlur('firstname')}
                                        onChange={this.onchangeHandle} />
                                    <FormFeedback>{error.firstname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="lastname" md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name here"
                                        value={this.state.lastname}
                                        valid={error.lastname === ""}
                                        invalid={error.lastname !== ""}
                                        onBlur={this.handelBlur('lastname')}
                                        onChange={this.onchangeHandle} />
                                    <FormFeedback>{error.lastname}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="telnum" md={2}>Telephone No</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="your Tel No here"
                                        value={this.state.telnum}
                                        valid={error.telnum === ""}
                                        invalid={error.telnum !== ""}
                                        onBlur={this.handelBlur('telnum')}
                                        onChange={this.onchangeHandle} />
                                    <FormFeedback>{error.telnum}</FormFeedback>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="email" md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email here"
                                        value={this.state.email}
                                        valid={error.email === ""}
                                        invalid={error.email !== ""}
                                        onBlur={this.handelBlur('email')}
                                        onChange={this.onchangeHandle} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 6, offset: 2 }}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree}
                                                onChange={this.onchangeHandle} /> {' '}
                                            <strong>May we Contact you</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{ size: 3, offset: 1 }}>
                                    <Input type="select" name="contactType" value={this.state.contactType}
                                        onChange={this.onchangeHandle} >
                                        <option>Tel</option>
                                        <option>email</option>
                                    </Input>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor="message" md={2}>Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows="12" placeholder="feedback here"
                                        value={this.state.message}
                                        onChange={this.onchangeHandle} />
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{ size: 3, offset: 2 }}>
                                    <Button type="submit" color="primary">Send Us Feedback</Button>
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }

}

export default Contact