import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import useAuth from '../../Hooks/useAuth';
import { Link } from 'react-router-dom';
const Cart = () => {
    const {id}= useParams();
    const {user}=useAuth();
    
    const [product,setProduct]=useState({});
    useEffect(()=>{
        fetch(`https://howling-ghoul-86513.herokuapp.com/products/${id}`)
        .then(res=>res.json())
        .then(data=>setProduct(data));
    },[])

    const { register, handleSubmit,reset } = useForm();
    const onSubmit = data => {
        console.log(data)
        axios.post('https://howling-ghoul-86513.herokuapp.com/cart',data)
        .then(res=>{
          console.log(res)
            if(res.data.insertedId){
                alert('successfully added Order! ')
                reset();
            }
        })
    };
    return (
        <>
        <div className="login m-lg-5">
            
            <div className="loginWrapper ms-0 me-0">
            <h1 className="text-center fw-bold">Book Details</h1>
                <Row className="text-center ">
                    <Col sm={8}>
                        <Card.Img className="img-fluid" variant="top" src={product?.image} />
                    </Col>
                    <Col sm={4}>
                    <form  onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex align-items-center">
                        <p className="my-2 mx-2">Email</p>
                        {user?.email && 
                            <input readOnly={true} defaultValue={user?.email} {...register("email")}/>
                        } 
                        </div>
                            <div className="d-flex align-items-center">
                            <p className="my-2 mx-2">Username</p>
                            {user?.displayName && <input  defaultValue={user?.displayName} {...register("username", { required: true})} placeholder="username"/>}
                            </div>
                            <div className="d-flex align-items-center">
                            <p className="my-2 mx-2">Place</p>
                        {product?.booktitle && <input readOnly={true} defaultValue={product?.booktitle} {...register("booktitle", { required: true})} placeholder="Book Name"/>}
                            </div>  
                            <div className="d-flex align-items-center">
                                <p className="my-2 mx-2">price</p>
                                {product?.bookprice && 
                                    <input readOnly={true} defaultValue={product?.bookprice} type="text" {...register("price")} placeholder="Book Price"/>
                                }
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="my-2 mx-2"></p>
                                {product?.image && 
                                    <input className="d-none" readOnly={true} defaultValue={product?.image} type="text" {...register("image")} />
                                }
                            </div>
                            <div className="d-flex align-items-center">
                                <p className="my-2 mx-2">phone</p>
                                    <input {...register("phone", { required: true})} placeholder="Your phone number" required/>
                            </div>
                        {'pending' && 
                        <input className="d-none" readOnly={true} defaultValue="pending.." {...register("status", { required: true})} placeholder="status"/>}
                        <input type="submit" value="ORDER"/>
                        </form>
                    </Col>
                </Row>
                <Link to="/checkout">
                    <button className="btn btn-outline-info">Check Out<span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></button>
                </Link>
            </div>
        </div>
            </>
    );
};

export default Cart;