import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import { logInUser } from '../Redux/Actions/logIn';
import {useAuth0} from "@auth0/auth0-react"
import styles from '../Styles/User.module.css'

function Login() {
    
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
       logInUser(input)
             setInput({username:"",
                       password:""})
            }
                 

    return (
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
                        <span>Register with google</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login;