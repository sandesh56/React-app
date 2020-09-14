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
