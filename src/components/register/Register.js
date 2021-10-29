import "./register.css";
import "../login/login.css";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

import imlogo from '../../images/logoheader.png';
import Button from "@restart/ui/esm/Button";

const Register=()=> {
  const {error,createInWithPasswordEmail,setUsername,setEmail,setPassword}=useAuth();
  
  const handeleUsername=(e)=>{
      setUsername(e.target.value);
  }
  const handeleEmail=(e)=>{
      setEmail(e.target.value);
  }
  const handelePassword=(e)=>{
      setPassword(e.target.value);
  }

  return (
    <div className="login m-lg-5">
      <div className="loginWrapper ms-0 me-0">
          <img className="limg loginLogo" src={imlogo} alt="" />
          <span className="loginDesc">
          Sign Up Please
          </span>
          <Form onSubmit={createInWithPasswordEmail}>
              <FloatingLabel
                
                label="User Name"
                className="mb-3"
              >
              <Form.Control onBlur={handeleUsername} type="text" placeholder="Username" required />
              </FloatingLabel>
              <FloatingLabel
                
                label="Email address"
                className="mb-3"
              >
              <Form.Control onBlur={handeleEmail} type="email" placeholder="name@example.com" required />
              </FloatingLabel>
              <FloatingLabel  label="Password">
                <Form.Control onBlur={handelePassword} type="password" placeholder="Password" required />
              </FloatingLabel>
              <p className="text-danger text-center m-2 p-2">{error}</p>
              <Button type='submit' className="btn btn-outline-info mt-2 mb-2 w-50">Sign Up</Button>
          </Form>
        
        <Link className="text-decoration-none" to='/login'><h5 className="text-primary text-center mt-2 mb-2">Go Login Page</h5></Link>
      </div>
    </div>
    
  );
 
}
export default  Register;
