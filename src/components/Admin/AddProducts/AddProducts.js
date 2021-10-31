import Button from '@restart/ui/esm/Button';
import React, { useRef } from 'react';
import { Link } from 'react-router-dom';

const AddProducts = () => {
    const booktitleRef = useRef();
    const bookpriceRef = useRef();
    const discriptionRef = useRef();
    const imageRef = useRef();
    const bookrateRef = useRef();
    const handleAddUser = (e)=>{
        const booktitle = booktitleRef.current.value;
        const bookprice = bookpriceRef.current.value;
        const discrioption = discriptionRef.current.value;
        const image = imageRef.current.value;
        const rateing = bookrateRef.current.value;
        const newUser = { booktitle,bookprice,discrioption,image,rateing};
        const url='https://howling-ghoul-86513.herokuapp.com/addproduct';
        fetch(url,{
            method :'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
        .then(res => res.json())
        .then(data => {
            if (data.insertedId) {
                alert('Successfully added the Products.')
                e.target.reset();
            }
        })
        e.preventDefault();
        // console.log("click");
    }
    return (
        <div className="container text-center justify-content-center align-items-center mt-5 p-3">
            <h1 className="text-center">Add Book Information</h1>
            <Link to='/viewallproduct'>
                <Button  className="btn btn-outline-info">Go All View Product Page</Button>
            </Link>
            <form onSubmit={handleAddUser}>
            <div className="row flex-column mb-3 g-3">
                <div className="col">
                    <label className="form-label">Title Book</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Title Book" ref={booktitleRef}/>
                    </div>
                    
                </div>
                <div className="col">
                    <label className="form-label">Price Of Book</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Price Of Book" ref={bookpriceRef}/>
                    </div>
                    
                </div>
                <div className="col">
                    <label className="form-label">Discription</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Discription" aria-label="Amount Bazar"ref={discriptionRef}/>
                    </div>
                    
                </div>
                <div className="col">
                    <label className="form-label">Single Image Url</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Single Image Url" aria-label="Single Image Url"ref={imageRef}/>
                    </div>
                    
                </div>
                <div className="col">
                    <label className="form-label">Book Rateing</label>
                    <div className="col-sm-10">
                        <input type="text" className="form-control" placeholder="Book Rateing" aria-label="Book Rateing"ref={bookrateRef}/>
                    </div>  
                </div>
            </div>
            <div className="col-auto">
                <button type="submit" className="btn btn-outline-primary mb-3">ADD</button>
            </div>
            </form>
            
        </div>
    );
};

export default AddProducts;
