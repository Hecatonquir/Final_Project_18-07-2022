import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { logInUser } from '../Redux/Actions/logInUser';
import {useAuth0} from "@auth0/auth0-react"
import styles from '../Styles/User.module.css'
import img1 from '../Media/google.png'
import {isExpired, decodeToken} from "react-jwt"
import {useDispatch,useSelector} from "react-redux"
import {
    Box,
    Heading,
    Input,
    Text,
    Flex,
    Button
  } from "@chakra-ui/react";
import Nav from './Nav';
import {useCookies} from "react-cookie"
import { UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes';


function LogIn() {
    let dispatch = useDispatch()
    let navigate = useNavigate()
    let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]
	let tokenDecoded = decodeToken(token1)
    let active = useSelector(state => state.loginState)


   
    const {loginWithRedirect} = useAuth0()
    const [cookies,setCookie] = useCookies(['access-control'])
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
       logInUser(input,navigate,dispatch,setCookie)
             
            }

            if(token) {
                dispatch({type: UPDATE_STATE_TRUE})
            }
                 
            

    return (

         <Box bgGradient="linear(to-r, #1c2333, #371a1e)" minHeight="100vh">
            {  !active ?
            <Box>
  
                <Nav/>
            <Box>
                <Flex justifyContent='center' alignItems='center' minHeight='90vh'>
                <Box bg="gray" width="40%" padding={4} marginTop={4} borderRadius="2%">
                    <Heading as='h2' color='white' textAlign='center' marginBottom={6}>Login</Heading>
                    <Input 
                    type="text" 
                    name="username" 
                    onChange={handleChange} 
                    placeholder="Username" 
                    value={input.username}
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    color='white'
                    variant="flushed"
                    marginBottom={6}
                    />

                    <Input 
                    type="password" 
                    name="password" 
                    onChange={handleChange} 
                    placeholder="Password" 
                    value={input.password}
                    _placeholder={{ opacity: 0.4, color: "inherit" }}
                    color='white'
                    variant="flushed"
                    marginBottom={6}
                    />

                    <Box textAlign='center' marginBottom={8}>
                    <Button onClick={submitButton}>Login</Button>
                    </Box>
        
                    <Box color='white' marginBottom={8}>
                        <Flex justifyContent='space-around' alignItems='center'>
                        <Text>Don't have an account?</Text>
                        <Link to="/register"><Text>Register</Text></Link>
                        </Flex>
                   
                    </Box>

                    <Box textAlign='center' marginBottom={6}>
                        <Button  onClick={() => {loginWithRedirect()
                             navigate("/")}} className={styles.Button3}>
                            <img src={img1} alt='not img' className={styles.icon}/><span>Register with google</span>
                        </Button>
                    </Box>
                </Box>
                </Flex>
                </Box>
            </Box>
            : 
            <Box bgGradient="linear(to-r, #1c2333, #371a1e)" minHeight="100vh">
                <Nav/>
                <Flex justifyContent='center' alignItems='center' minHeight='90vh'>
                <Box>
                <Text color='white' fontSize='3.4em'>Oops, you missed something? You are Logged In!</Text>
                </Box>
                </Flex>
                
            </Box>
            }

            </Box>
    )
}

export default LogIn;