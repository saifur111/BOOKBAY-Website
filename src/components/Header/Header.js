import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import l1 from '../../images/logoheader.png'

const Header = () => {
    const {user,logOut}=useAuth();
    return (
            <nav className="navbar fixed-top navbar-expand-lg navbar-expand-md navbar-expand-sm navbar-light bg-light">
                <div className="container ps-md-1 pe-md-1">
                    <Link className="navbar-brand" to="/" href="#">
                    <img src={l1} alt="" width="120" />
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item custom-li">
                                    <Link className="nav-link" aria-current="page" to="/home">Home</Link> 
                            </li>
                            <li className="nav-item custom-li">
                                <Link className="nav-link" to="/categories">Categories</Link>
                            </li>
                            <li className="nav-item custom-li"> 
                                    <Link className="nav-link" to="/services">Services</Link> 
                            </li>
                            <li className="nav-item custom-li">
                                    <Link className="nav-link" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item custom-li">
                                <Link to="/aboutus" className="nav-link">About Us</Link> 
                            </li>
                        </ul>
                        <div className="d-flex">
                            <div>
                            {
                                user?.email?
                                <small className="text-info text-center" >{user.displayName}</small>:<></>
                            }
                            </div>
                            {
                            
                                user?.email?
                                <Link to="/login" className="btn btn-outline-primary m-2 p-2" type="button" onClick={logOut} ><i className="fas fa-sign-out-alt"></i></Link>:
                                <Link to="/login" className="btn btn-outline-primary m-2 p-2" type="button" ><i className="fas fa-sign-in-alt"></i></Link>
                            }
                            {
                            
                                user?.email?
                                <><Link  to='/admin' className="btn btn-outline-info mt-2 mb-2">Admin</Link></>:<>
                                <Link to="/register" className="btn btn-outline-primary m-2 p-2" type="button"><i className="fas fa-user-plus"></i></Link>
                                
                                </>
                                
                                
                            }

                                <Link to={`/cart/id`} className="btn btn-outline-primary m-2 p-2" type="button"><i className="fas fa-cart-plus"></i></Link>
                            </div>
                         </div>
                </div>
            </nav>
    );
};

export default Header;