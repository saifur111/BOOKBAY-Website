import React, { useEffect, useState } from 'react';
import Checkoutsingle from './Checkoutsingle';

const Checkout = () => {
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        fetch(`https://howling-ghoul-86513.herokuapp.com/checkout`)
        .then(res=>res.json())
        .then(data=>setProducts(data));
    },[])
    return (
        <div className="text-center justify-content-center align-items-center mt-5 p-3">
            <h1>Product Found : {products.length}</h1>
            <div className="service-container container">
                    {
                        products.map(product=> <Checkoutsingle
                            key={product._id}
                            product={product}
                        ></Checkoutsingle>)
                    }
            </div>
        </div>
    );
};

export default Checkout;