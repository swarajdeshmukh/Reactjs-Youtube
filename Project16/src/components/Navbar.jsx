import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/' ><h1>Swaraj</h1></Link>
        <div className='nav-links'>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/cources'>Cources</Link>
            <Link to='/product'>Product</Link>
        </div>
      
    </div>
  )
}

export default Navbar
