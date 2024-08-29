import React from 'react'

function Userlist() {

    const users = ['ritesh','ranjeet','pushpendra','pankaj','aman'];

  return (
    <div>
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
