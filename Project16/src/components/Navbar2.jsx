import React from 'react'
import { useNavigate } from 'react-router-dom'
const Navbar2 = () => {
const navigate = useNavigate()
  return (
    <div className='navbar2'>
      <button onClick={()=>{
        navigate('/')
      }} 
      className='btn'>Return to home</button>
      <button onClick={()=>{
        navigate(-1)
      }} 
      className='btn2'>Back</button>
    </div>
  )
}

export default Navbar2
