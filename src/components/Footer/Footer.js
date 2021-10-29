import React from 'react';
import './footer.css';
import { Link } from 'react-router-dom';
import imgbg from '../../images/fimg.jpg';
import l1 from '../../images/l1.png';

const Footer = () => {
    return (
        <div style={{ backgroundImage: `url(${imgbg})` }} className="fot-img">


        <div className='container'>
            <div className='d-flex justify-content-between py-5'>
                <div className="col-3">
                    <div className="d-block">
                    <Link className="navbar-brand" to="/" href="#">
                    <img src={l1} alt="" width="180" />
                    </Link>
                        <h6 className="f-h6 text-left">
                        Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis augue duis dolore te feugait nulla facilisi mazim placerat
                        </h6>
                        <h6 className="f-h6">
                            <span><i className="fas fa-map-marker-alt hov"></i></span>
                            <span>Chittagong ,Bangladesh</span>
                        </h6>
                        <h6 className="f-h6">
                            <span ><i className="fas fa-phone hov"></i></span>
                            <span>+8801632619340</span>
                        </h6>
                        <h6 className="f-h6">
                            <span><i className="fas fa-clock hov"></i></span>
                            <span>Monday - Friday: 24 Hours</span>
                        </h6>
                    </div>
                    <div className='d-felx justify-content-between me-3 py-2 '>
                        <span><i className="fab fa-facebook-square p-2 hov"></i></span>
                        <span><i className="fab fa-youtube p-2 hov"></i></span>
                        <span><i className="fab fa-instagram p-2 hov"></i></span>
                        <span><i className="fab fa-linkedin-in p-2 hov"></i></span>

                    </div>
                </div>
                <div>
                    <h4 className="f-h4"><span>Quick Links</span></h4>
                    <h6 className="f-h6"><span>Home</span></h6>
                    <h6 className="f-h6"><span>Doctors</span></h6>
                    <h6 className="f-h6"><span>Services</span></h6>
                    <h6 className="f-h6"><span>Blog</span></h6>
                </div>
                <div>
                    <h4 className="f-h4"><span>About Us</span></h4>
                    <h6 className="f-h6"><span>Abouts</span></h6>
                    <h6 className="f-h6"><span>History</span></h6>
                    <h6 className="f-h6"><span>Programs</span></h6>
                    <h6 className="f-h6"><span>Schedule</span></h6>
                </div>
                <div className="text-center" >
                <h4 className="f-h4"><span>Contact Us</span></h4>
                    <div className="my-2 text-center">
                        <input className="form-control bg-dark text-light m-2" type="text" placeholder='Email' />
                        <textarea className="form-control bg-dark text-light m-2" placeholder='Message'></textarea>
                    </div>
                    <button className='btnsi m-2'>Submit</button>
                    <button className='btnsi m-2'>SUSCRIBE</button>
                </div>
            </div>  
            <h6 className="f-h6 m-3 text-center ">&copy; 2021-MediClinic.Develop By : Md Saifur Rahman</h6>                     
        </div>
    </div>
    );
};

export default Footer;