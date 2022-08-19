import './login.css'
import {useRef, React,useEffect} from 'react'
import Input from '../../components/input/Input'
import {useDispatch } from 'react-redux'
import loginCall from '../../api/loginCall'
import { useSelector } from 'react-redux'
import {CircularProgress } from '@mui/material'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch()
  const error = useSelector(state=>state.fetchUser.error)
  const [isfetch,setisFetch] = useState(true)
  const navigate = useNavigate()
  const handleClick = async (event)=>{
    event.preventDefault()
    const userCreds = {
        "email" : email.current.value,
        "password": password.current.value
      }
      setisFetch(isfetch=>isfetch=false)
    await loginCall(userCreds,dispatch)
    setisFetch(isfetch=>isfetch=true)

  }

  return (
    <div className='main-container'>
        <div className="sub-image-container">
            <h1>Login</h1>
        </div>
        <div className="sub-form-container">
            <h1>Welcome</h1>
            <p className='tagline'>Let's log you in quickly</p>
            <form  onSubmit={handleClick} action="">
                <Input error={error} nType={"email"} nPlaceholder={"Email Address"} required={true} refr ={email} />
                <Input error={error}  nType={"Password"} nPlaceholder={"Password"} required={true} refr ={password} />
                <p style={ error ? {fontSize : "20px",color : "red"} : {display : "none"} } >Login Failed</p>
                <button className='btn'>{isfetch ? "SUBMIT" : <CircularProgress size="20px"  style={{color: "white"}}/>}</button>
            </form>
            <p className='tagline-login'>Don't have an account? <a onClick={(e)=>{e.preventDefault(); navigate("/sign-up") }} href="/sign-up">Sign-up</a></p>

        </div>
      
    </div>
  )
}
