import React, { useEffect, useState } from 'react';
import Service from './Service';
import './Services.css';
import imgbg from '../../images/sev2.png';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('./demo.json')
            .then(res => res.json())
            .then(data => {
                setServices(data);
            });
    }, [])

    return (
        <>
            <div className="">
                    <img src={imgbg} className="w-100" alt="" />
                </div>
            <div className='m-lg-5 p-lg-5'>
                <h1 className="text-info text-center mt-lg-3 mb-lg-3">Our services</h1>
                <div className="service-container container">
                    {
                        services.map(service => <Service
                            key={service.id}
                            service={service}
                        ></Service>)
                    }
                </div>
            </div>
        </>
    );
};

export default Services;