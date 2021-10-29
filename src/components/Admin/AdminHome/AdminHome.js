import React from 'react';
import { Link } from 'react-router-dom';

const AdminHome = () => {
    return (
        <>
        <div className='d-flex text-center justify-content-center align-items-center mt-5 p-3'>
        <h1>Admin Page</h1>

        </div>
            
            <div className='d-flex text-center justify-content-center align-items-center pb-3'>
            
                <Link className="text-decoration-none  pe-5" to='/addproduct'><h5 className="text-primary text-center mt-2 mb-2">Add Product</h5></Link>
                <Link className="text-decoration-none  pe-5" to='/viewallproduct'><h5 className="text-primary text-center mt-2 mb-2">View All Product</h5></Link>
            </div>
        </>
    );
};

export default AdminHome;