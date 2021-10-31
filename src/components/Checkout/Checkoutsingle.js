import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Checkoutsingle = ({product}) => {
        const {booktitle, price,status} = product;
       
        const[orders,setOrders]=useState([]);
        const[isUpdate,setIsUpdate]=useState(null);
        useEffect(()=>{
        fetch('https://howling-ghoul-86513.herokuapp.com/orders')
        .then(res=>res.json())
        .then(data=>setOrders(data))
        },[isUpdate])

        const handleDeleteOrder= id =>{
            const proceed=window.confirm('Are you sure,you want to delete');
            if(proceed){
              const url=`https://howling-ghoul-86513.herokuapp.com/orders/${id}`
              fetch(url,{
                  method:'DELETE',
         
              })
              .then(res=>res.json())
              .then(data=>{
                  if(data.deletedCount>0){
                      alert('deleted Successfully!')
                      const remainingOrders=orders.filter(order=>order._id !== id)
                      setOrders(remainingOrders);
                      window.location.reload();
                  }
              });
            }
          }
        const handleUpdate = id =>{
 
            const url=`https://howling-ghoul-86513.herokuapp.com/orders/${id}`
            fetch(url)
            .then(res=>res.json())
            .then(data=>{
              if(data.matchedCount>0){
                alert('approved successfully!')
                setIsUpdate(true)
                window.location.reload();
              }else{
                setIsUpdate(false)
              }
               console.log(data)
            });
          }
    return (
        <div className="service m-lg-2 p-lg-2">
            <Card>
                <Card.Header>{booktitle}</Card.Header>
                <Card.Body>
                    <Card.Title>Book Price : ${price}</Card.Title>
                    <Card.Title>Status : {status}</Card.Title>
                    <Card.Footer className="">
                    </Card.Footer>
                    <div className="d-flex justify-content-center align-items-centerp-2">
                        <button onClick={()=>handleUpdate(product._id)} className="btn btn-success">click for approve<i className="fas fa-check-circle mx-2 text-warning"></i></button>
                        <button onClick={() => handleDeleteOrder(product._id)} className="btn btn-danger">Delete</button>
                        
                    </div> 
                </Card.Body>
            </Card>
        </div>
    );
};

export default Checkoutsingle;