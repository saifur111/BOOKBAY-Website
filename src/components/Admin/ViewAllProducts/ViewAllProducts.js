import React, { useEffect, useState } from 'react';
import Viewsingleproduct from './Viewsingleproduct';
import '../../Services/Services.css';
import Button from '@restart/ui/esm/Button';
import { Link } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ViewAllProducts = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://howling-ghoul-86513.herokuapp.com/viewallproduct`)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className="text-center justify-content-center align-items-center mt-5 p-3">
            <h1>Product Found : {products.length}</h1>
            <Link to='/addproduct'>
                <Button  className="btn btn-outline-info">Go Add Product Page</Button>
            </Link>
            <div className="service-container container">
                    {
                        products.length===0 ? 
                        <div className="d-flex justify-content-center align-items-center">
                          <Spinner animation="border" />
                        </div>:
                        products.map(product=> <Viewsingleproduct
                            Viewsingleproduct
                            key={product._id}
                            product={product}
                        ></Viewsingleproduct>)
                    }
            </div>
            
        </div>
    );
};

export default ViewAllProducts;