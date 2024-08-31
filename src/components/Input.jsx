import React from 'react' ;
import { useRef } from 'react' ;
function Input() {

  const inputRef =  useRef(null)
  console.log(inputRef) ;


  const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(inputRef.current.value)

  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input ref={inputRef} type='text'/>
        <button>Submit</button>
        </form>  
    </div>
  )
}

export default Input 


//controlled components =>  the input values are controlled by react state 
//uncontrolled components => by using useRef we can directly access the input value from DOM  .
