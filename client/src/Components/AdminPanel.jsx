import React,{useEffect, useState} from 'react'
import axios from "axios"
import {useNavigate} from "react-router-dom"
import {decodeToken} from "react-jwt"
import PageNotFound from './Page404'
import getUsers from '../Redux/Actions/getUsers'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUserDB } from '../Redux/Actions/deleteUser'
import {deleteEvent} from "../Redux/Actions/deleteEvent"
import getEvents from '../Redux/Actions/getEvents'
import { changeRole } from '../Redux/Actions/updateRole'


 function AdminPanel() {
    let token = document.cookie
		.split(';')
		.filter((el) => el.includes('access-token'))
		.toString()
		.split('=')[1];

	let tokenDecoded = decodeToken(token);

let usersBD = useSelector(state => state.allUsers)
let events = useSelector(state => state.allEvents)

let dispatch = useDispatch()
let navigate = useNavigate()
const [admin, setAdmin] = useState(false)
let [userADM, setUser] = useState({
    username: "",
    posts: ""
})

let [actRoles, setAct] = useState(false)

function handleChange(e) {

    setUser({...userADM, [e.target.name]: e.target.value})
}




useEffect(() => {
    

    axios("http://localhost:3001/user/admin", {withCredentials: true})
    .then(response => setAdmin(true))
    .then(response => dispatch(getUsers()))
    .then(response => dispatch(getEvents()))
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
       {events.length && admin && events.filter(el=> el.Name.toLowerCase().includes(userADM.posts.toLowerCase()) && userADM.posts !== "" ? el: null).slice(0,3).map((el,i) => (
        <div key={i}>
            <button onClick={() =>  {return deleteEvent(el.ID), setUser({username: "",posts: ""})}}>Delete Event</button>
            <button onClick={()=>{}}>Update Event</button>

            <span>Name: {el.Name} || Price: {el.Price} || City: {el.City} || Quantity: {el.Quantity} || Partner: </span>
        </div>
     
       ))}

       </div>

        <div>
       {admin && <input name="posts" type="text"  placeholder="Search Event" value={userADM.posts} onChange={(e) =>handleChange(e)}></input>}
       </div>

       <div>
       {usersBD.length && admin && usersBD.filter(el=> el.Name.toLowerCase().includes(userADM.username.toLowerCase()) && userADM.username !== "" ? el: null).slice(0,3).map((el,i) => (
        <div key={i}>
            <button onClick={() => {deleteUserDB(el.Email,dispatch)
                 setUser({username: "",posts: ""})}}>Delete User</button>
            <button onClick={()=> {actRoles? setAct(false):setAct(true)}}>Change Role</button>
            <button hidden={actRoles? false: true}name="Admin" onClick={(e) => changeRole(e.target.name, el.Email,dispatch)}>Admin</button>
            <button hidden={actRoles? false: true}name="Partner" onClick={(e) => changeRole(e.target.name, el.Email,dispatch)}>Partner</button>
            <button hidden={actRoles? false: true} name="User"onClick={(e) => changeRole(e.target.name, el.Email,dispatch)}>User</button>

            <span>User: {el.Name} || Email: {el.Email} || Role: {el.Role}</span>
        </div>
     
       ))}
       </div>

    </div>
   )
   



  
  

}


export default AdminPanel