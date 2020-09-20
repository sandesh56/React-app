import React from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './Loading';
import { baseUrl } from '../shared/baseUrl';

function RenderItem({ item, isLoading, errmess }) {
    if (isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>

        );
    }
    else if (errmess) {
        return (
            <h4>{errmess}</h4>
        );
    }
    else {
        return (
            <Card>
                <CardImg object src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle><h5>{item.name}</h5></CardTitle>
                    {item.designation ? <CardSubtitle><h6>{item.designation}</h6></CardSubtitle> : null}
                    <CardText>{item.description}</CardText>
                </CardBody>
            </Card>

        );
    }
}

export default function Home(props) {
    return (
        <div className="container">
            <div className="row align-item-start">
                <div className="col-12 col-md m-1">
                    <RenderItem item={props.dishes}
                        isLoading={props.dishLoading}
                        errmess={props.disherrmess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderItem item={props.promotions}
                        isLoading={props.promoLoading}
                        errmess={props.promoerrmess} />
                </div>
                <div className="col-12 col-md m-1">
                    <RenderItem item={props.leaders} />
                </div>
            </div>
        </div>
    );
}

