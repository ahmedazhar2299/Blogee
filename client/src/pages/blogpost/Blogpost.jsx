import './blogpost.css'
import { West } from '@mui/icons-material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { POST_FAILURE } from '../../redux/reducer/fetchPost'
import fetchPostCall from '../../api/fetchPostCall'


export default function Blogpost({post}) {
    const dispatch = useDispatch();
    const handleClick = (e)=>{
        e.preventDefault()
        
        fetchPostCall(null,dispatch)
    }
  return (
    <div className="main-container-blogpost">
      <div className="back-icon-container">
        <West onClick={handleClick} className='arrowBack'/>
        <button onClick={handleClick} className='back-btn'>Back</button>
       
      </div>
      <div className="main-post-container">
        <div className="titleinfo-container">
        <h1>{post.title}</h1>
        <h4>written by @{post.username}</h4>
        <h4>on {post.date} </h4>
        </div>
        <p><span>{ post.description[0].toUpperCase()}</span>{post.description.slice(1)}</p>
      </div>
    </div>
  )
}
