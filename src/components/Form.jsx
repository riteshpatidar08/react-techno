import React from 'react'
import { useState } from 'react'
function Form() {

    const [username,setUsername] = useState(' ');
    const [password,setPassword] = useState(' ');

    const handleUsernameChange = (event) => {
    console.log(event.target.value)
    setUsername(event.target.value)
    }

  return (
    <div>
      <form>
        <label htmlFor='username'>Username</label>
        <input onChange={handleUsernameChange} type='text' id='username' value={username} />
        <label htmlFor='password'>Password</label>
        <input type='text' id='password'/>
        <button type='submit'>Submit</button>
      </form>

      <div>{username}</div>
    </div>
  )
}

export default Form
