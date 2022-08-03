import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import styles from "../Styles/Profile.module.css";
import {decodeToken} from "react-jwt"
import Nav from './Nav'
import Tabs from "./UserAccount.jsx";
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import styles from '../Styles/User.module.css'

function Profile() {
  let {user} = useAuth0()
  let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]

   
	let tokenDecoded = decodeToken(token1);
  

  return (
    <Box bg='#393E46' minHeight='100vh'>
      {token && token ? (
        <>
         <Nav />
        <Flex justifyContent='center' flexDirection='row'>
         <Box color='#EEEEEE'   width='25%' padding={4} minHeight='100vh'>
          <Flex justifyContent='center' alignItems='center' flexDirection='column'>
          <Heading as='h4' marginBottom={2}>Profile</Heading>
              <Image src={`${tokenDecoded.picture}` || user.picture} alt="No img" marginBottom={4} width="250" height="300" borderRadius='15px'></Image>
              <Heading as='h3' marginBottom={2}>{`${tokenDecoded.name[0].toUpperCase()}${tokenDecoded.name.slice(1)}` || user.name}</Heading>
              <Heading as='h3' marginBottom={2}>{tokenDecoded.city ? tokenDecoded.city : null}</Heading>
              <Heading as='h3' marginBottom={2} fontSize='2xl'>Rol: {tokenDecoded.role || "User"}</Heading>
              <Text marginBottom={2}>{tokenDecoded.email}</Text>
          </Flex>
          </Box>
          <Box width='75%' padding={4} minHeight='100vh' >
         <Flex justifyContent='right' minHeight='85vh' bg='#FD7014'>
          <Tabs />
         </Flex>
         </Box>
         </Flex>
        </>
      ) : (
        <div>
          <nav className={styles.nav}>
                <Link to= '/'>
                <button className={styles.Button}>Back</button>
                </Link>
            </nav>
        
        <Flex justifyContent='center' alignItems='center' height='90vh'>
          <Box color='white' bg='gray' width='50%' padding={4}  borderRadius="2%">
            <Heading as='h1' textAlign='center' margin={6}>You need to register first</Heading>
          </Box>
        </Flex>
        </div>
      )}
    </Box>
  );

}

export default Profile;
