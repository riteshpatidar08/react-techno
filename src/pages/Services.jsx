import React from 'react'
import {useNavigate} from 'react-router-dom'
function Services() {
    const navigate = useNavigate() ;

    const handleClick = () => {
        navigate('/')
    }
  return (
    <div>
      services
      <button onClick={handleClick}>Back to home page</button>
    </div>
  )
}

export default Services
