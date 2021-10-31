import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Card } from 'react-bootstrap';

const SingleService = ({service}) => {
    const { name,author,price,img } = service;
    return (
        <div className="service m-lg-2 p-lg-2">
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title className="text-center text-info">{name}</Card.Title>
                    <h5><Card.Text>Join Date : {author}</Card.Text></h5>
                    <h5><Card.Text>Price : {price}</Card.Text></h5>
                    <Card.Footer className="">
                        <Button to="/" className="btn btn-outline-info">Learn More <span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></Button>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default SingleService;