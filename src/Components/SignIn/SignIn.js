import React,{useRef,useState} from 'react'
import {auth} from '../../firebase'
import './SignIn.css'
import { Link } from 'react-router-dom';


const SignIn = () => {

    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error,setError] = useState(false)
    const signIn = (e) =>{
        e.preventDefault();
        auth.signInWithEmailAndPassword(
            emailRef.current.value,
            passwordRef.current.value
        ).then(user => {
            console.log(user)
        }).catch(err=>{
            console.log(err)
            setError(true)
        })
    }

  return (
        <div className="signin-container">
            <form className="signin-form">
                    <label><b>Email</b></label>
                    <input ref={emailRef} type="email" placeholder="Enter Username" name="email" required />
                    <label><b>Password</b></label>
                    <input ref={passwordRef} type="password" placeholder="Enter Password" name="psw" required />
                    <div className="signin-btn-wrapper">
                        <button className="signin-btn" onClick={signIn}>
                        
                        <Link to="/">SignIn</Link></button>
                        <p>new user? <span >sign up</span></p>
                    </div>
                    <p className={error?"err visible":"err hidden"}>user credential invalid</p>
            </form>
        </div>
  )
}

export default SignIn