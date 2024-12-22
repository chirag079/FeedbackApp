import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'


function Post() {
  const navigate=useNavigate()
  const handleClick=()=>{
    navigate('/')
  }


  return (
    <div>
      <h1>Post</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default Post
