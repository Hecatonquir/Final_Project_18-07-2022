import React, {useState} from 'react'
import {decodeToken} from "react-jwt"
import axios from "axios"
import {useNavigate} from "react-router-dom"
import { UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes'
import { useDispatch } from 'react-redux'
function Prepanel() {
console.log(document.cookie)
    const navigate = useNavigate()
    let dispatch = useDispatch()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
	let tokenDecoded = decodeToken(token)
    
    console.log(tokenDecoded)

    if(tokenDecoded && tokenDecoded.role !== "Partner") {
        if(tokenDecoded.role !== "Admin") {
        return alert("Not Allowed")
        }
    }

    

    function handleChange(e) {
        

        return setUser({...user, [e.target.name] : e.target.value})
        
    
    } 


    function handleSubmit(e,person) {
        e.preventDefault()
        
       
         axios.post("http://localhost:3001/user/login2", person, {withCredentials: true})
         .then(res => dispatch({type: UPDATE_STATE_TRUE}))
         .catch(error => (alert("Not Allowed!")))


         setTimeout(() => {
            if(decodeToken(document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]).role === "Partner") {
                navigate("/welcomeP")
            }

         }, 300);
            
    
            
         
       

        
        
        
    }

    
       
            return (
                <>

                <h3>Control Panel</h3>
                <form>
                    <div>
                <input name="username" type="text" value={user.username}onChange={(e) =>{handleChange(e)}}></input>
                </div>
                <div>
                <input name="password" type="text" value={user.password} onChange={(e) =>{handleChange(e)}}></input>
                </div>
                <button onClick={(e) => handleSubmit(e,user)} >Log In</button>
                </form>
                </>
            )
        
      

}

export default Prepanel