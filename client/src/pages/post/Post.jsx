import './post.css'
import { useSelector, useDispatch } from 'react-redux'
import React from 'react'
import fetchPostCall from '../../api/fetchPostCall'

export default function Post({post}) {
  const dispatch = useDispatch()
  const handleClick =(e) =>{
    e.preventDefault()
  fetchPostCall(post._id,dispatch)
  }
  return (
    <div className="posts-container">
          <h2>{post.date}</h2>
          <h1 >{post.title}</h1>
          <p> {post.description.slice(0,300) }<a onClick={handleClick} className='readMore' href="#">...Read More</a>
          </p>
          <p className="post-user">{'@'+post.username}</p>
        </div>
  )
}
