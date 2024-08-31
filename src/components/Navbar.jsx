import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <div className='h-20'>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/aboutus">About us</Link>
    </div>
  )
}

export default Navbar
