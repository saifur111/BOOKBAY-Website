import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import './Services.css';


const Service = ({product}) => {
   
    const {_id, booktitle, bookprice,rateing, discrioption, image } = product;
    
    return (
        <div className="service m-lg-2 p-lg-2">
            <Card>
                <Card.Img  className="card-img-top" variant="top" src={image} />
                <Card.Header>{booktitle}</Card.Header>
                <Card.Body>
                    <Card.Title>Book Price : ${bookprice}</Card.Title>
                    <Card.Text>{discrioption}</Card.Text>
                    <Card.Footer className="">
                    <p></p>
                        <Card.Text>Rating :<Rating initialRating={rateing}
                            emptySymbol="far fa-star icon-color"
                            fullSymbol="fas fa-star icon-color"
                            readonly>
                            </Rating></Card.Text>
                        <div className="card-footer d-grid">
                            <Link to={`/cart/${_id}`}>
                                <button className="btn btn-primary my-2  btn-fr">
                                    <i className="fas fa-user"></i> {' '}ADD BOOK</button>
                            </Link>    
                        </div>
                    </Card.Footer>
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Service;