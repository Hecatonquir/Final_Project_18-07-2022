import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { postUser } from '../Redux/Actions/postUser';
import {useAuth0} from "@auth0/auth0-react"

function User() {
    
    const dispatch = useDispatch()
    const {loginWithRedirect} = useAuth0()
    const [input , setInput] = useState({
        Username:"",
        Password:""
    })

    const handleChange = function (e){
        setInput({
           ...input,
           [e.target.name]: e.target.value
           
       })}

    const submitButton = function (e){
        e.preventDefault();
         dispatch(postUser(input))
             setInput({Username:"",
                       Password:""})
            }
                 

    return (
        <div>
            <input 
            type="text" 
            name="Username" 
            onChange={handleChange} 
            placeholder="Name" 
            value={input.Username}/>

            <br/>

            <input 
            type="password" 
            name="Password" 
            onChange={handleChange} 
            placeholder="Password" 
            value={input.Password}/>

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