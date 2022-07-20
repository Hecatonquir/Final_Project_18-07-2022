import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
function Profile() {
    const {user, isAuthenticated} = useAuth0()

  return (
    <div>
    {isAuthenticated ? 
    <div>
    <img src={`${user.picture}`} alt="No Image"></img>
    <h3>{user.name}</h3>
    <span>{user.email}</span>
    
    </div>
    : <h1>You need to register first</h1>}
</div>
  )
}

export default Profile