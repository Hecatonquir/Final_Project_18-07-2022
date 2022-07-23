import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { postUser } from '../Redux/Actions/postUser';
import {useAuth0} from "@auth0/auth0-react"

function User() {
    
    const dispatch = useDispatch()
    const {loginWithRedirect} = useAuth0()
    const [input , setInput] = useState({
        username:"",
        password:""
    })

    const handleChange = function (e){
        setInput({
           ...input,
           [e.target.name]: e.target.value
           
       })}

    const submitButton = function (e){
        e.preventDefault();
       postUser(input)
             setInput({username:"",
                       password:""})
            }
                 

    return (
        <div>
            <input 
            type="text" 
            name="username" 
            onChange={handleChange} 
            placeholder="Name" 
            value={input.username}/>

            <br/>

            <input 
            type="password" 
            name="password" 
            onChange={handleChange} 
            placeholder="Password" 
            value={input.password}/>

            <br/>

          <button onClick={submitButton}>Login User</button>

          <Link to="/register"><button >Register</button></Link>

          <button  onClick={() => loginWithRedirect()}>
                        <span>Register with google</span>
                     </button>
          
        </div>
    )
}

export default User;