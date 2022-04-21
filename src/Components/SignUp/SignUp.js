import React,{useRef} from 'react'
import {auth} from '../../firebase'
import './SignUp.css'
import { Link } from 'react-router-dom';


const SignUp = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const signUp = (e) =>{
        e.preventDefault();
        auth.createUserWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err=>{
            console.log(err)
        })
    }

  return (
    <div className="signup-container">
    <form className="signup-form">
            <label><b>Email</b></label>
            <input ref={emailRef} type="email" placeholder="Enter Username" name="email" required />
            <label><b>Password</b></label>
            <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required />
            <div className="signup-btn-wrapper">
                <button className="signup-btn" onClick={signUp}>SignUp</button>
                <p>Existing user? <Link to='/SignIn' ><span >sign In</span></Link></p>

                
            </div>
    </form>
    </div>
    )
}

export default SignUp
