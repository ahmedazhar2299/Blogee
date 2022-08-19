import './modal.css'

import React from 'react'
import axios from 'axios'
import { Close } from '@mui/icons-material'
import { useRef } from 'react'
import { useSelector } from 'react-redux'

export default function Modal() {
  const user = useSelector(state=>state.fetchUser.user)
  const title = useRef();
  const description = useRef();
  const handleClick = (e)=>{
    e.preventDefault()
    document.querySelector('.container-main').style.display = "none"
  }
  const handCreate=async (e)=>{
    e.preventDefault();
    const newpost = {
      title: title.current.value,
      description : description.current.value,
    }
    try{
     const res =  await axios.post(`/post/${user._id}`,newpost);
      document.querySelector('.container-main').style.display = "none"
    }
    catch(err){
      console.log(err)
    }
  }
  return (
    <div className='container-main'>
      <div className="close-btn-container">
      <button onClick={handleClick} className='close-btn'><Close/></button>
      </div>
      
      <h1>Create a New Post</h1>
      <form action="">
        <div className="title">
        <label htmlFor="titleInput">TITLE</label>
          <input type="text" autoComplete="off" name="titleInput" ref={title} placeholder='The Air Quality Index' className='titleInput' />
        </div>
       <div className="description">
       <label htmlFor="descInput">DESCRIPTION</label>
      <textarea autoComplete="off" className="descInput" ref={description} name="descInput"></textarea>
       </div>
       <div className="Modal-btn-container">
       <button onClick={handCreate} className='Modal-btn'>CREATE</button>
       </div>
      
      </form>
    </div>
  ) 
}
