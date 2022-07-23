import React, {useState} from 'react';
import {useDispatch} from 'react-redux'
import userRegister from '../Redux/Actions/postRegister';


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
           <p>Imagen</p>
             <input 
            type="file" 
            name="Image" 
            onChange={handleChange} 
            placeholder="Image" 
            value={input.Image}/>
             <br/>

             <input 
            type="text" 
            name="Location" 
            onChange={handleChange} 
            placeholder="Loacation" 
            value={input.Location}/>
             <br/>
          <button onClick={submitButton}>Register</button>


          
        </div>
    )
}

export default Register;