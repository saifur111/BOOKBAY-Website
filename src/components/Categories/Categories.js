import React, { useEffect, useState } from 'react';
import imgbg from '../../images/h3.jpg';
import SingleService from './SingleService';


const Categories = () => {
    const [services, setServices] = useState([]);
    const [services2, setServices2] = useState([]);
    const [services3, setServices3] = useState([]);
    useEffect(() => {
        fetch('./demo.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, [])
    useEffect(() => {
        fetch('./demo1.json')
            .then(res => res.json())
            .then(data => {
                setServices2(data);
            });
    }, [])
    useEffect(() => {
        fetch('./demo2.json')
            .then(res => res.json())
            .then(data => {
                setServices3(data);
            });
    }, [])

    return (
        <>
            <div className="">
                <img src={imgbg} className="w-100" alt="" />
            </div>
            <div className='m-lg-5 p-lg-5'>
                <h1 className="text-info text-center mt-lg-3 mb-lg-3">Categories</h1>
                <h2>Engineering Books</h2>
                <div className="service-container container">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
                <h2>History Books</h2>
                <div className="service-container container">
                    {
                        services2.map(service2 => <SingleService
                            key={service2.id}
                            service={service2}
                        ></SingleService>)
                    }
                </div>
                <h2>Islamic Books</h2>
                <div className="service-container container">
                    {
                        services3.map(service3 => <SingleService
                            key={service3.id}
                            service={service3}
                        ></SingleService>)
                    }
                </div>
            </div>
        </>
    );
};

export default Categories;