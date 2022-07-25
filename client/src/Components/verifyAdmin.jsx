import React, {useState} from 'react'
import {decodeToken} from "react-jwt"
import axios from "axios"
import {useNavigate} from "react-router-dom"
function Prepanel() {
console.log(document.cookie)
    const navigate = useNavigate()
    const [user, setUser] = useState({
        username: "",
        password: ""
    })

    let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
	let tokenDecoded = decodeToken(token)
    


    if((tokenDecoded && tokenDecoded.role !== "Partner" )||(tokenDecoded && tokenDecoded.role !== "Admin") ) {
        return alert("Not Allowed")
    }

    function handleChange(e) {
        

        return setUser({...user, [e.target.name] : e.target.value})
        
    
    } 


    function handleSubmit(e,person) {
        e.preventDefault()

        axios.post("http://localhost:3001/user/login", person, {withCredentials: true})
        .then(response => tokenDecoded.role === "Partner" ? 
        navigate("/controlPanel/welcomeP"):
        tokenDecoded.role === "Admin" ? navigate("/controlPanel/welcomeA"): alert("Not Allowed") )
        .catch(error => (alert("Not Allowed!")))
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