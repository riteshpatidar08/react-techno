import React, { Children } from 'react'
import Child from './Child'

function Parent() {
    const dataFromChild = (data) => {
        console.log('data from child' ,data)
    }
  return (
    <div className='h-40 border border-red-500'>
        <p>Parent component</p>
     <Child dataFromChild={dataFromChild}/> 
    </div>
  )
}

export default Parent
