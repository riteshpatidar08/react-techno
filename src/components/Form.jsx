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

  return (
    <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input onChange={handleUsernameChange} type='text' id='username' value={username} />
        <label htmlFor='password'>Password</label>
        <input onChange={handlePasswordChange} type='text' id='password'/>
        <button type='submit'>Submit</button>
      </form>

      <div>{username}</div>
    </div>
  )
}

export default Form
