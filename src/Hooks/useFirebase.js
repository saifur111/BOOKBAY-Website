import { getAuth, signInWithPopup,createUserWithEmailAndPassword,sendPasswordResetEmail,signInWithEmailAndPassword, GoogleAuthProvider, signOut,onAuthStateChanged,sendEmailVerification,updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initFirebaseAuth from "../components/Firebase/firebase.init";


initFirebaseAuth();

const useFirebase =()=>{
    const [user,setUser]=useState({});
    const [error , setError]=useState('');
    const [username,setUsername]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [loading,setLoading]=useState(true);


    const location = useLocation();
    const history = useHistory();
    const redirect_url = location.state?.from ||'/home';
    const redirect_urllog = location.state?.from ||'/login';

    const auth = getAuth();

     //SignIn With Google
    const signInWithGoogle =()=>{
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                setUser(result.user);
                history.push(redirect_url);
                // console.log(result.user); 
            }).finally(()=>{
                setLoading(false);
            });
        

    }
     // SignIn With Password & Email
    const signInWithPasswordEmail =(e)=>{

        e.preventDefault();
        console.log(email,"   ",password); 
        signInWithEmailAndPassword(auth, email, password)
        .then((result) => {
            setError('');
            history.push(redirect_url); 
        }).catch(error=>{
            setError(error.message);
        })

    }
    // create user With Password & Email
    const createInWithPasswordEmail =(e)=>{
        e.preventDefault();
        if(password.length<6){
            setError('Password Length Must Be At Least 6 Characters Long');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                verifyEmail();
                setWithUserName();
                history.push(redirect_urllog);
                // const user = result.user;
                // console.log(user); 
            });
    }
    // user state change
    useEffect(()=>{
      const unsub =  onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
               setUser({});
            }
            setLoading(false);
          });
          return ()=> unsub;
    },[auth])

    // verify Email
    const verifyEmail=()=>{
        sendEmailVerification(auth.currentUser)
        .then(result =>{
            console.log(result);
        })
    }
    // Set userNmae
    const setWithUserName=()=>{
        updateProfile(auth.currentUser, {
            displayName: username,
          }).then((result) => {

          });
    }
    // Reset Password 
    const resetPassword =()=>{
        sendPasswordResetEmail(auth,email).then((result) => {

          });
    }
    const logOut =()=>{
        setLoading(true);
        signOut(auth).then(() => {
            setUser({});
          }).finally(()=>{
            setLoading(false);
        });
    }
    return {
        user,
        signInWithGoogle,
        logOut,
        error,
        createInWithPasswordEmail,
        setUsername,
        setEmail,
        setPassword,
        username,
        signInWithPasswordEmail,
        resetPassword,
        loading
    }
}
export default useFirebase;