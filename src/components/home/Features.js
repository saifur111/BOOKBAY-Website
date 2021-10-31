import React, { useEffect, useState } from 'react';
import './home.css';
import img1 from '../../images/fimg1.png';
import img2 from '../../images/fimg2.png';
import img3 from '../../images/fimg3.png';
import { Spinner, Table } from 'react-bootstrap';
import '../Services/Services.css';
import Service from '../Services/Service';

const Features = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://howling-ghoul-86513.herokuapp.com/viewallproduct`)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <>
            <div className='m-lg-5 p-lg-5'>
                <h1 className="text-info text-center mt-lg-3 mb-lg-3">Our Services</h1>
                <div className="service-container container">
                    {
                        products.length===0 ? 
                        <div className="d-flex justify-content-center align-items-center">
                          <Spinner animation="border" />
                        </div>:
                        products.slice(0, 6).map(product => <Service
                            key={product._id}
                            product={product}
                        ></Service>)
                    }
                </div>
            </div>
            <div className="container d-flex">
                <div className="f-box col-4 bg-warning">
                    <img src={img1} alt="" className="f-icon mb-2" />
                    <h2 className="">Emergency Needed?</h2>
                    <h6 className="mb-2">Ut wisi enim ad minim veniam, quis<br/> laore nostrud exerci tation </h6>
                    <h1 className="mb-2">1-800-400-7400</h1>
                </div>
                <div className="f-box col-4 bg-info">
                    <img src={img3} alt="" className="f-icon mb-2" />
                    <h2 className="mb-2">Our New Features</h2>
                    <h6 className="mb-2">Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis augue duis dolore te feugait nulla facilisi mazim placerat</h6>

                </div>
                <div className="f-box col-4 bg-warning">
                    <img src={img2} alt="" className="f-icon mb-2" />
                    <h2 className="mb-2">Our Off Days</h2>
                    <Table striped bordered hover>
                        <tbody>
                            <tr>
                            <td>Monday - Friday</td>
                            <td>7.00pm - 17.00pm</td>
                            
                            </tr>
                            <tr>
                            <td>Sunday - Friday</td>
                            <td>8.00pm - 18.00pm</td>
                            </tr>
                        </tbody>
                    </Table>
                    
                </div>
            </div>
        </>
        
    );
};

export default Features;