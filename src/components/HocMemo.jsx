import React, { useEffect } from 'react'
import { memo } from 'react' ;

const HocMemo = () => {
    useEffect(()=>{
        console.log('hello')
    })
  return (
    <div>
      
    </div>
  )
}

export default HocMemo
