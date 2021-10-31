import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../Services/Services.css';

const Viewsingleproduct = ({product}) => {
    
        const {_id, booktitle, bookprice,rateing, discrioption, image } = product;
       
        const handleDelete=id=>{
            const proceed=window.confirm('Are you sure,you want to delete');
            if(proceed){
                const url=`https://howling-ghoul-86513.herokuapp.com/viewallproduct/${id}`;
                fetch(url,{
                    method:'DELETE'
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    if (data.deletedCount){
                        alert("Successfully deleted.")
                        window.location.reload();
                    }
                })
            }
        }

    return (
        <div className="service m-lg-2 p-lg-2">
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Header>{booktitle}</Card.Header>
                <Card.Body>
                    <Card.Title>Book Price : ${bookprice}</Card.Title>
                    <Card.Text>Details :{discrioption}</Card.Text>
                    <Card.Footer className="">
                        <Card.Text>Rating :{rateing}</Card.Text> 
                    </Card.Footer>
                    <div className="d-flex justify-content-center align-items-centerp-2">
                        <Link to={`/cart/${_id}`}><Button className="btn btn-outline-info  me-2 "><i class="fas fa-eye"></i></Button></Link>

                        <Button onClick={()=>handleDelete(_id)} className="btn btn-outline-danger me-2"><i class="fas fa-trash-alt"></i></Button>

                        <Link to={`/updateproduct/${_id}`}>
                            <Button  className="btn btn-outline-warning"><i class="fas fa-user-edit"></i></Button>
                        </Link>
                        
                        </div> 
                </Card.Body>
            </Card>
        </div>
        
    );
};

export default Viewsingleproduct;