import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import userRegister from '../Redux/Actions/postRegister';
import styles from '../Styles/Register.module.css'


function Register() {
    
    const dispatch = useDispatch()
    
    const [input , setInput] = useState({
        Name:"",
        Username:"",
        Password:"",
        Email:"",
        Image:"",
        Location:"",
        Role: "User"
    })

    const handleChange = function (e){
        setInput({
           ...input,
           [e.target.name]: e.target.value
           
       })}

    const submitButton = function (e){
        e.preventDefault();
         userRegister(input)
             setInput({Name:"",
                       Username:"",
                       Password:"",
                       Email:"",
                       Image:"",
                       Location:"",})
            }
                 

    return (
        <div>
            <nav className={styles.nav}>
                <Link to= '/login'>
                <button className={styles.Button}>Back</button>
                </Link>
            </nav>
            <div className={styles.container}>
                <h2 className={styles.title}>Register</h2>
                <input 
                type="text" 
                name="Name" 
                onChange={handleChange} 
                placeholder="Name" 
                value={input.Name}/>

                <br/>
                <input 
                type="text" 
                name="Username" 
                onChange={handleChange} 
                placeholder="Username" 
                value={input.Username}/>

                <br/>

                <input 
                type="password" 
                name="Password" 
                onChange={handleChange} 
                placeholder="Password" 
                value={input.Password}/>

                <br/>
                <input 
                type="text" 
                name="Email" 
                onChange={handleChange} 
                placeholder="Email" 
                value={input.Email}/>
                <br/>

                <input 
                type="text" 
                name="Location" 
                onChange={handleChange} 
                placeholder="Loacation" 
                value={input.Location}/>
                <br/>
                
                <div className={styles.image}>
                <p className={styles.title2}>Imagen: </p>
                <input 
                className={styles.Button3}
                type="file" 
                name="Image" 
                onChange={handleChange} 
                placeholder="Image" 
                value={input.Image}/>
                </div>
                <br/>

                
                <button className={styles.Button2} onClick={submitButton}>Register</button>
          </div>
        </div>
    )
}

export default Register;