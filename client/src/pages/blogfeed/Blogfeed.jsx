import "./blogfeed.css";

import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Post from "../post/Post";
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Blogpost from "../blogpost/Blogpost";


export default function Blogfeed() {
  const [post,setPost] = useState([]);
  const user = useSelector(state=>state.fetchUser.user)
  const currentPost = useSelector(state=>state.fetchPost.post)
  useEffect(()=>{
    const fetchPosts = async () => {
      const res =  await axios.get(`/post/${user._id}/timeline`)
      setPost(res.data)
     }
     fetchPosts();
    },[user,post]
  )

  if(currentPost!=null)
  return ( <Blogpost post= {currentPost}/>)
  else{
    return (
      <div className="key-container">
      <div className="side-bar">
        <Sidebar username = {user.username} />
      </div>
      <div className="feed-container">
        <h4>
          <hr /> Latest
        </h4>
         {post.map((p)=>{
          return <Post key={p._id} post={p}/>
        })}
        <hr className="Bottom-Separator"/>
      </div>
    </div>
    ) 

  }
    
  
}
