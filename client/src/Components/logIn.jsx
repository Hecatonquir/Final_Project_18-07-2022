import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logInUser } from '../Redux/Actions/logInUser';
import {useAuth0} from "@auth0/auth0-react"
import styles from '../Styles/User.module.css'
import img1 from '../Media/google.png'
import {isExpired, decodeToken} from "react-jwt"
import {useDispatch,useSelector} from "react-redux"



function LogIn() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
	let tokenDecoded = decodeToken(token)
    let active = useSelector(state => state.loginState)


   
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
       logInUser(input, dispatch,navigate)
             
            }
                 

    return (

         <div>
            {  !token || ! active ?
            <div>
  
            <nav className={styles.nav}>
                <Link to= '/'>
                <button className={styles.Button}>Back</button>
                </Link>
            </nav>
            <div>
                <div className={styles.container}>
                    <h2 className={styles.title}>Login</h2>
                    <input 
                    type="text" 
                    name="username" 
                    onChange={handleChange} 
                    placeholder="Username" 
                    value={input.username}/>

                    <br/>

                    <input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password" 
                    value={input.password}/>

                    <br/>

                    <button className={styles.Button2} onClick={submitButton}>Login</button>

                    <div className={styles.register}>
                    <p className={styles.title2}>Don't have an account?</p>
                    <Link to="/register"><p className={styles.title3}>Register</p></Link>
                    </div>

                    <button  onClick={() => loginWithRedirect()} className={styles.Button3}>
                        <img src={img1} alt='not img' className={styles.icon}/><span>Register with google</span>
                    </button>
                </div>
                </div>
            </div>
            : 
            <div className={styles.Total}>
                <nav className={styles.nav}>
                <Link to= '/'>
                <button className={styles.Button}>Back</button>
                </Link>
            </nav>
            <div>
                <p className={styles.text}>Oops, you missed something? You are Logged In!</p>
            </div>
            </div>
            }

            </div>
    )
}

export default LogIn;