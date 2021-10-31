import React, { useEffect, useState } from 'react';
import { useHistory, useLocation, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import '../../login/login.css';
import useAuth from '../../../Hooks/useAuth';
import { Link } from 'react-router-dom';
import Button from '@restart/ui/esm/Button';

const UpdateProduct = () => {
    const { register,reset, handleSubmit, watch, formState: { errors } } = useForm();
   const {loading,setLoading}=useAuth();


    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from ||'/home';
    console.log(watch("example"));
    const {id}= useParams();
    const [product,setProduct]=useState({});
    
    useEffect(()=>{
        fetch(`https://howling-ghoul-86513.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])
    const onSubmit = data =>{
        const url=`https://howling-ghoul-86513.herokuapp.com/products/${id}`;
        fetch(url,{
            method :'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount>0) {
                alert('Successfully Updated the Products.')
                reset();
                history.push(redirect_url);
            }
        }).finally(()=>{
            setLoading(false);
        });
        // console.log("click");
    }

    return (
        <div className='container loginWrapper mt-5 mb-5 p-5'> 
           <h1 className="text-center">Update Book Information</h1> 
           <Link to='/viewallproduct'>
                <Button  className="btn btn-outline-info">Go All View Product Page</Button>
            </Link>
           <div className="d-flex justify-content-center flex-culumn align-items-center">
           <form onSubmit={handleSubmit(onSubmit)}>
               <div className="m-2">
                    <label className="form-label">Title Book</label>
                    <input className="form-control" defaultValue={product.booktitle} {...register("booktitle", { required: true })}  />
               </div>
                <div className="m-2">
                    <label className="form-label">Price Of Book</label>
                    <input  className="form-control" {...register("bookprice", { required: true })} defaultValue={product.bookprice}  />
                </div>
                <div className="m-2">
                    <label className="form-label">Discription</label>
                    <textarea className="form-control" defaultValue={product.discrioption}{...register("discrioption", { required: true })} />
                </div>
                <div className="m-2">
                    <label className="form-label">Single Image Url</label>
                    <input className="form-control" defaultValue={product.image}{...register("image", { required: true })} />
                </div>
                <div className="m-2">
                    <label className="form-label">Book Rateing</label>
                    <input className="form-control"defaultValue={product.rateing} {...register("rateing", { required: true })} />
                </div>
                
                    {errors.exampleRequired && <span>This field is required</span>}      
                <input className="m-2 p-2" type="submit" />
            </form>
           </div>
           
        </div>
    );
};

export default UpdateProduct;