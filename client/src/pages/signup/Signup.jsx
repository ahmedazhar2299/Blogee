import './signup.css'

import React, { useRef } from 'react'
import Input from '../../components/input/Input'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Signup() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmPassword = useRef();
  const navigate = useNavigate();
  const handleClick = async (event)=>{
    event.preventDefault()
    if(password.current.value!==confirmPassword.current.value){
      confirmPassword.current.setCustomValidity('Password do not match')
    }
    else{
        const userCreds = {
          username : username.current.value,
          password : password.current.value,
          email : email.current.value
      }
      try {
      await axios.post('/auth/register',userCreds)
      navigate('/login')

      } catch (err) {
        console.log(err)
      }

    }
  }


  return (
    <div className='main-container'>
        <div className="sub-image-container">
            <h1>Sign Up</h1>

        </div>
        <div className="sub-form-container">
            <h1>Welcome</h1>
            <p className='tagline'>Let's sign you up quickly</p>
            <form onSubmit={handleClick} action="" method='post'>
                <Input nType={"text"} nPlaceholder={"Full Name"}  required={true}  refr ={username} />
                <Input nType={"email"} nPlaceholder={"Email Address"} required={true} refr ={email} />
                <Input nType={"Password"} nPlaceholder={"Password"} required={true} refr ={password} />
                <Input nType={"Password"}  nPlaceholder={"Confirm Password"} required={true} refr ={confirmPassword} />
                <button className='btn' type='submit'>SUBMIT</button>
            </form>
            <p className='tagline-login'>Already have an account? <a onClick={(e)=>{e.preventDefault(); navigate("/login") }} href="/login">Log-in</a></p>

        </div>
      
    </div>
  )
}
