import React,{useEffect, useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {decodeToken} from "react-jwt"
import PageNotFound from './Page404'
import getUsers from '../Redux/Actions/getUsers'
import { useDispatch, useSelector } from 'react-redux'



 function AdminPanel() {
    let token = document.cookie
		.split(';')
		.filter((el) => el.includes('access-token'))
		.toString()
		.split('=')[1];

	let tokenDecoded = decodeToken(token);

let usersBD = useSelector(state => state.allUsers)

let dispatch = useDispatch()
let navigate = useNavigate()
const [admin, setAdmin] = useState(false)
let [userADM, setUser] = useState({
    username: "",
    posts: ""
})


function handleChange(e) {

    setUser({...userADM, [e.target.name]: e.target.value})
}




useEffect(() => {
    

    axios("http://localhost:3001/user/admin", {withCredentials: true})
    .then(response => setAdmin(true))
    .then(response => dispatch(getUsers()))
    .catch(error => navigate("/"))

    
    

  return () => {
  }
}, [])



    
   return (
    <div>
        <div>
        {admin && <h1>Welcome {tokenDecoded && tokenDecoded.name}</h1>}
        </div>

        <div>
       {admin && <input name="username" type="text"  placeholder="Search User" value={userADM.username} onChange={(e) =>handleChange(e)}></input>}
       </div>

        <div>
       {admin && <input name="posts" type="text"  placeholder="Search Event" value={userADM.posts} onChange={(e) =>handleChange(e)}></input>}
       </div>

       <div>
       {usersBD.length && admin && usersBD.filter(el=> el.Name.toLowerCase().includes(userADM.username.toLowerCase()) && userADM.username !== "" ? el: null).slice(0,3).map((el,i) => (
        <div key={i}>
            <button>Delete User</button>
            <button>Change Role</button>
            
            <span>User: {el.Name} || Email: {el.Email} || Role: {el.Role}</span>
        </div>
     
       ))}
       </div>

    </div>
   )
   



  
  

}

export default AdminPanel