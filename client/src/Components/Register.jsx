import React, {useState, useRef } from 'react';  // useRef: for send form mail
import {useDispatch} from 'react-redux'
import {Link, useNavigate} from 'react-router-dom'
import userRegister from '../Redux/Actions/postRegister';
import { Widget} from '@uploadcare/react-widget';
import img from '../Media/register.jpeg'
import swal from 'sweetalert'
import styles from '../Styles/Register.module.css'
import emailjs from '@emailjs/browser';
import {
    FormLabel,
    Box,
    Heading,
    Input,
    Text,
    Flex,
    Image
  } from "@chakra-ui/react";
import Nav from './Nav';

function Register() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const form = useRef(); // mailing, este hook hace copia del form
    const SERVICE_ID = 'service_7eiwsn5'  // cuenta de google: mainstage.henryproyect@gmail.com
    const TEMPLATE_ID = 'template_wt1ysr9'  // Register Template
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
        <Box bg="#393E46" minHeight="100vh">
            <Nav/>
            <Flex flexDirection='row' justifyContent='space-between'>
            
                <Flex justifyContent='center' alignItems='center' minHeight='90vh' w='60%'>
                <form ref={form} >
                <Box bg="gray" width="30rem" padding={4} marginTop={4} borderRadius="2%">
                    <Heading as='h2'color='white' textAlign='center' marginBottom={6}>Register</Heading>
                    <Flex flexDirection='column'>
                        <Box marginBottom={6}>
                        <Input 
                        type="text" 
                        name="Name" 
                        onChange={handleChange} 
                        placeholder="Name" 
                        value={input.Name}
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        color='white'
                        variant="flushed"
                        />
                        { errors.Name && <Text color='red' fontSize='.7em'>{errors.Name}</Text>}
                        </Box>
                    
                    <Box marginBottom={6}>
                    <Input 
                        type="text" 
                        name="Username" 
                        onChange={handleChange} 
                        placeholder="Username" 
                        value={input.Username}
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        color='white'
                        variant="flushed"
                        />
                        {errors.Username && <Text color='red' fontSize='.7em'>{errors.Username}</Text>}
                    </Box>
                   
                   <Box marginBottom={6} >
                   <Input 
                        type="password" 
                        name="Password" 
                        onChange={handleChange} 
                        placeholder="Password" 
                        value={input.Password}
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        color='white'
                        variant="flushed"
                        />
                        {errors.Password && <Text color='red' fontSize='.7em'>{errors.Password}</Text>}
                   </Box>
                    
                    <Box marginBottom={6}>
                    <Input 
                        type="email" 
                        name="Email" 
                        onChange={handleChange} 
                        placeholder="Email" 
                        value={input.Email}
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        color='white'
                        variant="flushed"
                        />
                        {errors.Email && <Text color='red' fontSize='.7em'>{errors.Email}</Text>}
                    </Box>
                    

                        <Box marginBottom={6}>
                        <Input 
                        type="text" 
                        name="Location" 
                        onChange={handleChange} 
                        placeholder="Location" 
                        value={input.Location}
                        _placeholder={{ opacity: 0.4, color: "inherit" }}
                        color='white'
                        variant="flushed"
                        />
                        {errors.Location && <Text color='red' fontSize='.7em'>{errors.Location}</Text>}
                        </Box>
                     

                        <Box marginBottom={6}  >
                        <FormLabel color='white'>Image</FormLabel>
                      
                        <Widget 
                              
                               
                                placeholder="Image" 
								publicKey='4a7fa09f2188af9b76a3'
								type='hidden'
                                role="uploadcare-uploader"
								value={input.Image}
								id='Image'
								name='Image'
								variant='flushed'
								data-tabs='file url facebook gdrive gphotos'
								required
								onChange={(e) => {
									setInput({
										...input,
										Image: e.originalUrl,
									}); 
								}}
							/>
                           
                        </Box>
                        
                   
                    
                    <input type="submit" className={styles.Button2} onClick={submitButton} value='Register'/>
                    </Flex>
            </Box>
            </form>
                </Flex>
          

                <Flex w='40%' justifyContent='right'>
                    <Image src={img} alt='img notfound' w='100%' h='90vh'/>
                </Flex>
            </Flex>
        </Box>
    )
}

export default Register;