import React from 'react';
import './Banner.css';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import banner1 from '../../images/h1.jpg';
import banner2 from '../../images/h2.jpg';
import banner3 from '../../images/h3.jpg';


const Banner = () => {
    return (
        <>
            <Carousel className='default-h d-none d-sm-none d-md-block mt-lg-5 pt-lg-2'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='pt-0'>
                        <h1 className='banner-h1'>Purchased Book Now</h1>
                        <p className='banner-p'>Making it easy to see a Order Book online, right now.</p>
                        <Link className='btn btn-outline-primary fs-3 fw-bold m-2 p-2' to="/">SHOP NOW</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner2}
                        alt="Second slide"
                    />

                    <Carousel.Caption className='pt-0'>
                        <h1 className='banner-h1'>Why Online Virtual Shop are Better?</h1>
                        <p className='banner-p'>Many Custumer do not want to leave their home and not go a Book shop.</p>
                        <Link className='btn btn-outline-primary fw-bold fs-3 m-2 p-2' to="/">SHOP NOW</Link>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner3}
                        alt="Third slide"
                    />
                    <Carousel.Caption className='pt-0'>
                        <h1 className='banner-h1'>Best Online Shop</h1>
                        <p className='banner-p'>Join the tens of thousands of Authors Book.</p>
                        <Link className='btn btn-outline-primary fs-3 fw-bold m-2 p-2' to="/">SHOP NOW</Link>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    );
};

export default Banner;