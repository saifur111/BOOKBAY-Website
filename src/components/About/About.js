import Button from "@restart/ui/esm/Button";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from '../../images/h2.jpg';
import ip1 from '../../images/ip1.png';
import ip2 from '../../images/ip2.png';
import ip3 from '../../images/ip3.png';
import ip4 from '../../images/ip4.png';
import ip5 from '../../images/ip5.png';
import ip6 from '../../images/ip6.png';


const About =()=> {

  return (
    <>
        <Carousel className='mt-lg-5 pt-lg-2'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={banner1}
                        alt="First slide"
                    />
                    <Carousel.Caption className='pt-0'>
                        <h1 className='banner-h1'>ABOUT US</h1>
                        <p className='banner-p'>Making it easy to see a doctor online, right now.</p>
                        <Link className='btn btn-outline-dark m-2 p-2' to="/services">Shop Now</Link> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container d-flex my-5 bg-light">
            <div className="row row-cols-3 gy-2 ">
                <div className="row row-cols-12">
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip1}alt="" />
                        <div>
                            <h6 className="bg-h6">All Categories Books</h6>
                            <p>Our team of provides are All Categories Books. </p>
                        </div>
                    </div>

                    <div className="col d-flex">
                        <img className="bg-w2" src={ip2}alt="" />
                        <div>
                            <h6 className="bg-h6">Highly Rated Author</h6>
                            <p>WorlBest Writers Book we provides.</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-12">
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip3}alt="" />
                        <div>
                            <h6 className="bg-h6">Quality Standured</h6>
                            <h6>Average Book Quality consultation:
                              <ul>
                                <li>White Print - Tk 82</li>
                                <li>Color Print - Tk 75</li>
                                </ul>for common conditions.
                              </h6>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip4}alt="" />
                        <div>
                            <h6 className="bg-h6">Substantial Savings</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-12">
                <div className="col d-flex">
                        <img className="bg-w2" src={ip5}alt="" />
                        <div>
                            <h6 className="bg-h6">
No Risk Money </h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip6}alt="" />
                        <div>
                            <h6 className="bg-h6">Scicence Book</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container my-lg-5">
                <div className="m-lg-2 p-lg-2">
                    
                    <h1 className="m-lg-2 p-lg-2">Online Book Management</h1>
                    <p className="m-lg-3 p-lg-3">In this system, you can buy, sell or even rent your books as well as second-hand books.You can search books online by title, author and even with the help of  ISBN no or International Standard Book Number which is a 10 to 13 digit unique identification no for books. Books are placed online in such a manner that you have the basic and direct understanding of the book in short time period.Buyback facility is also available so you can even buy again those books that you have sold previously.There are some special facilities available with Buybacks.</p>
                </div>
                <div className="m-lg-2 p-lg-2">
                    
                    <h1 className="m-lg-2 p-lg-2">How Safe is an Online Prescription?</h1>
                    <p className="m-lg-3 p-lg-3">Online doctors hold the same qualification as in-office doctors. They are also licensed to practice medicine and additionally trained to offer medical care with telemedicine.  The differences between the two groups of physicians are in accessibility, duration of time spent indirect patient care, and the number of patients. As board-certified doctors, online medical doctors are well equipped to issue safe online prescriptions. The drugs captured in these prescriptions are recommended at a safe dose and are indicated for the presenting condition. In addition, the drugs are subjected to expert scrutiny by a registered pharmacist before dispensing. The risk of getting an unsafe online prescription is almost zero, considering the scrutiny an online prescription goes through.Online medical doctor services also offer a digital patient monitoring plan that assesses the effectiveness of therapy. With this service, an online doctor can monitor the level of a patient’s response to therapy, medication adherence, and unwanted drug reactions. Patients can regularly submit health data that helps the online doctor understand how the drug dosage is affecting therapy. Many times, the information supplied remotely by the patient guides the online medical doctor to modify medication dosages. Modifying the dosage of medications initially prescribed might also be necessary to maximize therapy. These procedures indirectly reveal the level of medication safety to the online doctor who continuously monitors potential known adverse drug effects.</p>
                </div>
                <div className="m-lg-2 p-lg-2">
                    
                    <h1 className="m-lg-2 p-lg-2">Books Category</h1>
                    <p className="m-lg-3 p-lg-3">Online stores provide various kinds of books such as public speaking textbooks, accounting textbooks, competitive exam textbooks, business textbooks etc, technical textbooks etc.Lab course books are also available such as Medical Laboratory Science,chemical testing,  Active lab and so on.
                    Lab training courses are usually part of certificate and associate’s degree programs in different fields .These courses include combo packs of HPLC, AAS, GC, Food and pharma microbiology etc. You  have to sign up for these online lab training courses to advance your professional knowledge and skills.These courses will enhance your future career prospects.It’s a good and best way to exploring knowledge by means of online courses. You can buy study material for these courses through various online bookstores for example. Booksrun</p>
                </div>
                <div className="d-flex justify-content-center m-lg-2 p-lg-2 w-100">
                <Link to="/"><Button  className="btn btn-outline-info ">Go Home<span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></Button></Link>   
                
                </div>
            </div>
        </>
  );
}
export default About;
