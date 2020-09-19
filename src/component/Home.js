import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function RenderItem({ item }) {
    return (
        <Card>
            <CardImg object src={item.image} alt={item.name} />
            <CardBody>
                <CardTitle><h5>{item.name}</h5></CardTitle>
                {item.designation ? <CardSubtitle><h6>{item.designation}</h6></CardSubtitle> : null}
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>

    );
}

export default function Home(props) {
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderItem item={props.dishes} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderItem item={props.promotions} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderItem item={props.leaders} />
                </div>
            </div>
        </div>
    );
}

// import React, { Component } from "react";
// import { Control, LocalForm, Errors } from "react-redux-form";
// import { Button, Label, Row } from 'reactstrap';

// const minLength = (len) => (val) => val && val.length >= len;
// const maxLength = (len) => (val) => !val || val.length <= len;

// export class Home extends Component {

//     constructor(props) {
//         super(props);
//         this.handelchange = this.handelchange.bind(this);
//     }



//     handelchange(values) {
//         console.log("current state is :" + JSON.stringify(values));
//         alert("current state is :" + JSON.stringify(values));
//     }
//     render() {
//         return (
//             <div>
//                 <LocalForm onSubmit={(values) => this.handelchange(values)}>
//                     <Row className="form-group">
//                         <Label htmlFor="ratings">Ratings</Label>
//                         <Control.select
//                             model=".ratings"
//                             name="ratings"
//                             className="form-control">
//                             <option>1</option>
//                             <option>2</option>
//                             <option>3</option>
//                             <option>4</option>
//                             <option>5</option>
//                         </Control.select>
//                     </Row>
//                     <Row className="form-group">
//                         <Label htmlFor="yourname">Your Name</Label>
//                         <Control.txt
//                             model=".yourname"
//                             id="yourname"
//                             name="yourname"
//                             validators={{
//                                 maxLength: maxLength(15),
//                                 minLength: minLength(3),
//                             }}
//                         />
//                         <Errors
//                             className="bg-danger"
//                             model=".yourname"
//                             show="touched"
//                             messages={{
//                                 maxLength: "field character exceded",
//                                 minLength: "minimum 3 character is required",
//                             }}
//                         />
//                     </Row>
//                     <Row className="form-group">
//                         <Label htmlFor="comment">Comment</Label>
//                         <Control.textarea
//                             model=".comment"
//                             name="comment"
//                             validators={{
//                                 minLength: minLength(15),
//                             }}
//                         />
//                         <Errors
//                             className="bg-danger"
//                             model=".yourname"
//                             show="touched"
//                             messages={{
//                                 minLength: "minimum 15 character is required",
//                             }}
//                         />
//                     </Row>
//                     <Row className="form-group">
//                         <Button type="submit" value="submit" color="primary">
//                             Submit
// 								</Button>
//                     </Row>
//                 </LocalForm>
//             </div>
//         );
//     }
// }

// export default Home;
