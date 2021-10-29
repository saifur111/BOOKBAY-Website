import Button from "@restart/ui/esm/Button";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner1 from '../../images/about1.jpg';
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
                        <Link className='btn btn-outline-dark m-2 p-2' to="/">CONSULT ME NOW</Link> 
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <div className="container d-flex my-5 bg-light">
            <div className="row row-cols-3 gy-2 ">
                <div className="row row-cols-12">
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip1}alt="" />
                        <div>
                            <h6 className="bg-h6">Board Certified Doctors</h6>
                            <p>Our team of doctors are all board certified and trained in the United States. Rest assured, you are getting the best possible care.</p>
                        </div>
                    </div>

                    <div className="col d-flex">
                        <img className="bg-w2" src={ip2}alt="" />
                        <div>
                            <h6 className="bg-h6">Highly Rated Doctors</h6>
                            <p>Mediclinic has thousands of 5-star reviews from satisfied customers. These can be found on TrustPilot, Google, Facebook, and other sites.</p>
                        </div>
                    </div>
                </div>
                <div className="row row-cols-12">
                    <div className="col d-flex">
                        <img className="bg-w2" src={ip3}alt="" />
                        <div>
                            <h6 className="bg-h6">Quality Care</h6>
                            <h6>Average doctor consultation:
                              <ul>
                                <li>MDLive - Tk 82</li>
                                <li>Teladoc - Tk 75</li>
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
                            <h6 className="bg-h6">Cardiac Clinic</h6>
                            <p>Lorem ipsum dolor sit amet, cons ectetuer. Proin gravida nibh vel velit auctor aliquet aenean</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            <div className="container my-lg-5">
                <div className="m-lg-2 p-lg-2">
                    
                    <h1 className="m-lg-2 p-lg-2">Getting a Prescription Online</h1>
                    <p className="m-lg-3 p-lg-3">Prescriptions are very important in medical care. At a point in time, during a clinic visit, almost all the patients will be issued a prescription. According to a Statista report, about 4.38 billion retail prescriptions were filled in the United States alone in 2019. In 2020, over 4.55 billion prescriptions were issued. The report also projects that the number of retails prescriptions issued in the United States by 2025 will reach over 4.98 billion. A major percentage of these prescriptions was issued in physical hospital visits. As the reach of online doctor services expands, more prescriptions are expected to be issued online.Getting an online prescription comes with little or no difficulties. In fact, all patients registered to online medical services are expected to get an online prescription. On making clerking a patient and making a diagnosis, an online doctor can order for a medical investigation online. Test results might be needed to determine the needed to effectively treat the presenting conditions. An online doctor is licensed to virtually generate a prescription and transmit it to a registered on the telemedicine network. Transmission of online prescriptions is done confidentially on a secured network provided by a digital health service provider. A patient can present at the pharmacy, supply an identification code and get the medications captured in the online prescription.Getting an online prescription has proven useful in the wake of the recent COVID-19 outbreak. As the lockdown continued, the lockdown procedure forced patients who needed a refill to order online. Refills are especially important for patients on an active prescription. Those who registered with an online medical service provider and needed a prescription also got them issued online. Many online doctor services have partnered with different pharmacies for at-home and mail-order deliveries of refills. This plan of full-service online medical care totally removes the burden of accessing medical care from the patient.</p>
                </div>
                <div className="m-lg-2 p-lg-2">
                    
                    <h1 className="m-lg-2 p-lg-2">How Safe is an Online Prescription?</h1>
                    <p className="m-lg-3 p-lg-3">Online doctors hold the same qualification as in-office doctors. They are also licensed to practice medicine and additionally trained to offer medical care with telemedicine.  The differences between the two groups of physicians are in accessibility, duration of time spent indirect patient care, and the number of patients. As board-certified doctors, online medical doctors are well equipped to issue safe online prescriptions. The drugs captured in these prescriptions are recommended at a safe dose and are indicated for the presenting condition. In addition, the drugs are subjected to expert scrutiny by a registered pharmacist before dispensing. The risk of getting an unsafe online prescription is almost zero, considering the scrutiny an online prescription goes through.Online medical doctor services also offer a digital patient monitoring plan that assesses the effectiveness of therapy. With this service, an online doctor can monitor the level of a patient’s response to therapy, medication adherence, and unwanted drug reactions. Patients can regularly submit health data that helps the online doctor understand how the drug dosage is affecting therapy. Many times, the information supplied remotely by the patient guides the online medical doctor to modify medication dosages. Modifying the dosage of medications initially prescribed might also be necessary to maximize therapy. These procedures indirectly reveal the level of medication safety to the online doctor who continuously monitors potential known adverse drug effects.</p>
                </div>
                <div className="m-lg-2 p-lg-2">
                    
                    <h1 className="m-lg-2 p-lg-2">Regulation Guiding Online Prescription Issuing Services</h1>
                    <p className="m-lg-3 p-lg-3">Depending on existing State laws, there are a few regulations that guide how online prescriptions are issued, filled, and modified. Prescription-only medications might only be allowed for patients who have previously established a patient-provider relationship with the virtual medical service provider. Over-the-counter medications, on the other hand, can be routinely captured on an online prescription for patients who require no urgent medical care. Other regulations also put the burden of the responsible provision of drugs on the pharmacist while mandating the virtual doctor to conduct the needed medical investigation before issuing an online prescription. As telemedicine increases its reach and offer designed to care for many disease conditions, it is expected that the number of prescriptions issued online will also increase significantly.</p>
                </div>
                <div className="d-flex justify-content-center m-lg-2 p-lg-2 w-100">
                <Link to="/"><Button  className="btn btn-outline-info ">Go Home<span className="btn-outline-dark"><i className="fas fa-chevron-right"></i></span></Button></Link>   
                
                </div>
            </div>
        </>
  );
}
export default About;
