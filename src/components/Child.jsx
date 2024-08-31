import React from 'react'
import { useState } from 'react'
function Child({dataFromChild}) {
    
    const [text ,setText] = useState('')
    const handleChange = (event) => {
        setText(event.target.value);
        dataFromChild(text);
    }
  return (
    <div className='h-40 w-96  border border-blue-500'>
     
    <input onChange={handleChange} type='text'></input>
    </div>
  )
}

export default Child
