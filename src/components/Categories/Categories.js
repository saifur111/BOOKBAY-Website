import React, { useEffect, useState } from 'react';
import imgbg from '../../images/doc.jpg';
import SingleService from './SingleService';


const Categories = () => {
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
                <h1 className="text-info text-center mt-lg-3 mb-lg-3">Our Doctors</h1>
                <div className="service-container container">
                    {
                        services.map(service => <SingleService
                            key={service.id}
                            service={service}
                        ></SingleService>)
                    }
                </div>
            </div>
        </>
    );
};

export default Categories;