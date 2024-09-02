import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  
  return (
    <div className='h-20 bg-black text-white font-semibold flex justify-center items-center gap-4'>
      <Link to="/">Home</Link>
      <Link to="/services">Services</Link>
      <Link to="/aboutus">About us</Link>
    </div>
  )
}

export default Navbar
