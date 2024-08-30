import React from 'react'
import { useState } from 'react'


function Form({password,username,setPassword,setUsername}) {

    const handleUsernameChange = (event) => {
    console.log(event.target.value)
    setUsername(event.target.value)
    }

    const handlePasswordChange = (event)=>{
        setPassword(event.target.value)
    }

    const handleSubmit= (event)=>{
      event.preventDefault()
    const data = {
    username : username,
    //NOTE in the case we have same key and value we can directly use the state variable which automatically creates the same name key
     password
   }
   console.log(data)
    }

  return (
    <div className='m-2'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input className="w-64 h-10 p-2 ring-2 ring-sky-500 rounded-sm m-2" onChange={handleUsernameChange} type='text' id='username' value={username} />
        <label htmlFor='password'>Password</label>
        <input className="w-64 h-10 p-2 ring-2 ring-sky-500 rounded-sm m-2" onChange={handlePasswordChange} type='text' id='password'/>
        <button className="px-8 py-2 bg-sky-500 text-white rounded-md hover:bg-white hover:text-black hover:border-2 hover:border-sky-500' type='submit">Submit</button>
      </form>

      <div>{username}</div>
    </div>
  )
}

export default Form
