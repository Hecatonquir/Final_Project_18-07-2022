import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import userRegister from '../Redux/Actions/postRegister';
import swal from 'sweetalert'
import styles from '../Styles/Register.module.css'

function Register() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [input , setInput] = useState({
        Name:"",
        Username:"",
        Password:"",
        Email:"",
        Image:"",
        Location:"",
        Role: "User"
    })
    const [errors, setErrors] = useState({})

    function validate(input) {
        let errors = {}
        if(!input.Name) {
            errors.Name='Name is required'
        } else if(input.Name.length < 3) {
            errors.Name = 'The name is invalid'
        } else if(!input.Name.match( (/^[A-Za-z ]+$/))){
            errors.Name = 'Name of breed must contain only letters'
        }
        if(!input.Username){
            errors.Username='Username is required'
        }
        if(!input.Password){
            errors.Password='Password is required'
        }
        if(!input.Email){
            errors.Email='Email is required'
        }
        if(!input.Location){
            errors.Location='Location is required'
        } else if(!input.Location.match( (/^[A-Za-z ]+$/))){
            errors.Location = 'Location must contain only letters'
        }
        return errors
    }

    const handleChange = function (e){
        setInput({
           ...input,
           [e.target.name]: e.target.value
       })
       setErrors(validate({...input, [e.target.name] : e.target.value}))
    }

    const submitButton = function (e){
        e.preventDefault();
        if(!input.Name || !input.Username|| !input.Password || !input.Email|| !input.Location) {
            swal("Complete all options")
        }
        if(errors.Name || errors.Username || errors.Password || errors.Email || errors.Location) {
            swal("incorrect data")
        } else {
        setErrors(validate(input))
         userRegister(input)
             setInput({Name:"",
                       Username:"",
                       Password:"",
                       Email:"",
                       Image:"",
                       Location:"",})
        navigate('/login')
            }
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
                value={input.Name}
                className={styles.input}/>
                { errors.Name && <p className={styles.titleError}>{errors.Name}</p>}
                <input 
                type="text" 
                name="Username" 
                onChange={handleChange} 
                placeholder="Username" 
                value={input.Username}
                className={styles.input}/>
                {errors.Username && <p className={styles.titleError}>{errors.Username}</p>}
                <input 
                type="password" 
                name="Password" 
                onChange={handleChange} 
                placeholder="Password" 
                value={input.Password}
                className={styles.input}/>
                {errors.Password && <p className={styles.titleError}>{errors.Password}</p>}
                <input 
                type="email" 
                name="Email" 
                onChange={handleChange} 
                placeholder="Email" 
                value={input.Email}
                className={styles.input}/>
                {errors.Email && <p className={styles.titleError}>{errors.Email}</p>}
                <input 
                type="text" 
                name="Location" 
                onChange={handleChange} 
                placeholder="Location" 
                value={input.Location}
                className={styles.input}/>
                {errors.Location && <p className={styles.titleError}>{errors.Location}</p>}
                <input 
                className={styles.input}
                type="text" 
                name="Image" 
                onChange={handleChange} 
                placeholder="Image Url" 
                value={input.Image}/>
                <br/>

                
                <button className={styles.Button2} onClick={submitButton}>Register</button>
          </div>
        </div>
    )
}

export default Register;