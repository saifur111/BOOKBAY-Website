
import Button from "@restart/ui/esm/Button";
import { FloatingLabel, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./login.css";
import imlogo from '../../images/logoheader.png';

const Login=()=> {
  const {resetPassword,signInWithGoogle,signInWithPasswordEmail,setEmail,setPassword}= useAuth();

    const handeleEmail=(e)=>{
        setEmail(e.target.value);
    }
    const handelePassword=(e)=>{
        setPassword(e.target.value);
    }
  return (
    <>
    <div className="login m-lg-5">
      <div className="loginWrapper ms-0 me-0">
          <img className="limg loginLogo" src={imlogo} alt="" />
          <span className="loginDesc">
            Log In Please
          </span>
          <Form onSubmit={signInWithPasswordEmail}>
              <FloatingLabel
                controlId="floatingInput"
                label="Email address"
                className="mb-3"
              >
              <Form.Control onBlur={handeleEmail} type="email" placeholder="name@example.com" required />
              </FloatingLabel>
              <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control onBlur={handelePassword} type="password" placeholder="Password" required />
              </FloatingLabel>
              <Button type='submit' className="btn btn-outline-info mt-2 me-lg-2 mb-2 w-50">Log In</Button>
              <span onClick={resetPassword} className="btn btn-outline-info">Forgot?</span>
          </Form>
            <Link className="text-decoration-none ms-lg-2" to='/register'><h5 className="text-primary text-center mt-2 mb-2">
              Create a New Account
            </h5></Link>
            <Button  to='/register' onClick={signInWithGoogle} className="btn btn-outline-info mt-2 mb-2">
              Google SignIn
            </Button>
            
        </div>
    </div>
    </>
  );
}
export default Login;