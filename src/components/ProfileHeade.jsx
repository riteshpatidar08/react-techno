import React from 'react'
import { useContext } from 'react'
import { Datacontext } from '../context/Datacontext'

function ProfileHeade({user}) {

  const {userData} = useContext(Datacontext)
  console.log(userData)

  return (
    <div>
    {userData.username}
    </div>
  )
}

export default ProfileHeade
