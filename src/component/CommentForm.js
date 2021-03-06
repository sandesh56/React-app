import React, { Component } from "react";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Button, Label, Row, Col } from 'reactstrap';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


export class CommentForm extends Component {
    constructor(props) {
        super(props);
    }

    handelchange(values) {
        this.props.postComment(this.props.dishId, values.ratings, values.author, values.comment);
    }

    render() {
        return (
            <div className="container">
                <LocalForm onSubmit={(values) => this.handelchange(values)}>
                    <Row className="form-group">
                        <Label htmlFor="ratings">First Name</Label>

                        <Control.select model=".ratings" id="ratings" name="ratings"
                            className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Control.select>
                    </Row>

                    <Row className="form-group">
                        <Label htmlFor="author">Your Name</Label>
                        <Control.text model=".author" id="author" name="author"
                            className="form-control"
                            validators={{
                                required, minLength: minLength(3), maxLength: maxLength(15)
                            }}
                        />
                        <Errors
                            className="text-danger"
                            model=".author"
                            show="touched"
                            messages={{
                                required: 'Required',
                                minLength: 'Must be greater than 2 characters',
                                maxLength: 'Must be 15 characters or less'
                            }}
                        />


                    </Row>
                    <Row className="form-group">
                        <Label htmlFor="comment">Comment</Label>
                        <Control.textarea model=".comment" id="comment" name="comment"
                            className="form-control"
                            rows="12"
                        />
                    </Row>
                    <Row className="form-group">
                        <Button type="submit" color="primary">
                            Submit
                            </Button>
                    </Row>
                </LocalForm>
            </div>
        );
    }
}

export default CommentForm;
