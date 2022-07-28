import React, {useState, useRef } from 'react';  // useRef for mailing
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import userRegister from '../Redux/Actions/postRegister';
import swal from 'sweetalert'
import styles from '../Styles/Register.module.css'
import emailjs from '@emailjs/browser';

function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const form = useRef(); // mailing, este hook hace copia del form
    const SERVICE_ID = 'service_7eiwsn5'
    const TEMPLATE_ID = 'template_wt1ysr9'
    const PUBLIC_KEY = 'qkuGOFSooilyep5Ho'

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

    //console.log(form.current)

    const submitButton = function (e){
        //console.log('ENTRO A SUBMIT BUTTON')
        e.preventDefault();

        /////////////////////////////Envio de mail de confirmacion //////////////////////////////////
        emailjs.sendForm( SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY )
          .then((result) => { console.log(result.text); } , (error) => { console.log(error.text); });
        /////////////////////////////////////////////////////////////////////////////////////////////

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

            <form ref={form}>
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

                    
                    <input type="submit" className={styles.Button2} onClick={submitButton} value='Register'/>
            </div>
          </form>
        </div>
    )
}

export default Register;