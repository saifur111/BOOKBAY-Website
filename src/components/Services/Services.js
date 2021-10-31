import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css';
import imgbg from '../../images/sev6.jpg';

const Services = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://howling-ghoul-86513.herokuapp.com/viewallproduct`)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    

    return (
        <>
            <div className="">
                    <img src={imgbg} className="w-100" alt="" />
                </div>
            <div className='m-lg-5 p-lg-5'>
                <h1 className="text-info text-center mt-lg-3 mb-lg-3">Our All Books</h1>
                <div className="service-container container">
                    {
                        products.map(product => <Service
                            key={product._id}
                            product={product}
                        ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;