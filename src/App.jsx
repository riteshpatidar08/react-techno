import React from 'react'
import Button from './components/Button';
import { useState } from 'react';

function App() {

  const [isLogIn,setIsLogIn] = useState(false)

  const handleClick = () => {
    setIsLogIn(!isLogIn)
  }
  return (
    <div className='flex justify-center'>
    <p className='text-2xl text-sky-500 font-semibold'>{isLogIn ? 'Welcome user you are logged in' : 'Please login'}</p>
   <button onClick={handleClick} className='px-6 py-2 bg-red-500 rounded-sm m-4 text-white'>{isLogIn ? 'Logout' : 'Login'}</button>
    </div>
  )
}

export default App ;

//Condition Rendering ;
//using ternary operator and &&

