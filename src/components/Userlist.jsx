import React from 'react'

function Userlist({username,password}) {

    const users = ['ritesh','ranjeet','pushpendra','pankaj','aman'];

  return (
    <div className='border-2 border-red-500'>
        <h1>{password}</h1>
        <h1>{username}</h1>
        <ul>
            {
                users.map((listItem,index)=>(
                   <li key={listItem}>{listItem}</li> 
                ))
            }
        </ul>
      
    </div>
  )
}

export default Userlist


//rfce = for normal function component
//rafce =  for arrow function component
