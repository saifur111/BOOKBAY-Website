import React from 'react';
import im1 from '../../images/fc3.jpg';
import book1 from '../../images/boo1.png';

import ip1 from '../../images/ip1.png';
import ip2 from '../../images/ip2.png';
import ip3 from '../../images/ip3.png';
import ip4 from '../../images/ip4.png';
import ip5 from '../../images/ip5.png';
import ip6 from '../../images/ip6.png';
import bg1 from '../../images/bg.jpg';
import bg2 from '../../images/bg1.jpg';
import bg3 from '../../images/bg2.jpg';
import bg4 from '../../images/bg3.jpg';
import bg5 from '../../images/bg4.jpg';
import bg6 from '../../images/bg5.jpg';
import { Card } from 'react-bootstrap';
import Button from '@restart/ui/esm/Button';


const Features1 = () => {
    return (
        <>
        <h1 className="text-center my-3 hov">Latest News</h1>
        <div className="container d-flex my-3 bg-light">
            <div className="col-6">
                <div className="service m-lg-2 p-lg-2">
                <Card>
                    <Card.Img variant="top" src={im1} />
                    <Card.Body>
                        <Card.Title className="text-center text-info">From World Library Books</Card.Title>
                        <h5><Card.Text>Posted On May 20, 2021</Card.Text></h5>
                        <Card.Text>Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</Card.Text>
                        <Card.Footer className="">
                            <Button className="btn btn-outline-info">Read More <span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></Button>
                        </Card.Footer>
                    </Card.Body>
                </Card>
            </div>
            </div>
            <div className="col-6">
                <div className="service m-lg-2 p-lg-2">
                    <Card>
                        <Card.Img variant="top" src={book1} />
                        <Card.Body>
                            <Card.Title className="text-center text-info">From World Library Books</Card.Title>
                            <h5><Card.Text>Posted On May 20, 2021</Card.Text></h5>
                            <Card.Text>Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.</Card.Text>
                            <Card.Footer className="">
                                <Button className="btn btn-outline-info">Read More <span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></Button>
                            </Card.Footer>
                        </Card.Body>
                    </Card>
                </div>
            </div>    
        </div>
        <div className="container d-flex my-5 bg-light">
            <div className="row row-cols-3 gy-2 ">
                <div className="row row-cols-12">
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip1}alt="" />
                        <div>
                            <h6 className="bg-h6">Religious</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>

                    <div className="col d-flex">
                        <img className="bg-w2" src={ip2}alt="" />
                        <div>
                            <h6 className="bg-h6">Geography</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-12">
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip3}alt="" />
                        <div>
                            <h6 className="bg-h6">History Books</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip4}alt="" />
                        <div>
                            <h6 className="bg-h6">Fiction</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-12">
                <div className="col d-flex">
                        <img className="bg-w2" src={ip5}alt="" />
                        <div>
                            <h6 className="bg-h6">Onions</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip6}alt="" />
                        <div>
                            <h6 className="bg-h6">Economics</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="container my-5">
            <h1 className="text-center my-3 hov">Gallery</h1>
            <h5 className="text-center my-3">This is best onlineshop  in our Area.</h5>
            <div className="row gy-2 ">
                    <div className="col d-flex">
                        <img className="bg-w3" src={bg1}alt="" />
                        <img className="bg-w3 img-fluid" src={bg2}alt="" />
                        <img className="bg-w3" src={bg3}alt="" />
                    </div>
                    <div className="col d-flex">
                        <img className="bg-w3" src={bg4}alt="" />
                        <img className="bg-w3" src={bg5}alt="" />
                        <img className="bg-w3" src={bg6}alt="" />
                    </div>
            </div>
        </div>
        <div className="container d-flex justify-content-center m-5 h-w ">
            <button className="btn btn-outline-info">Learn More <span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></button> 
        </div>
        </>
    );
};

export default Features1;