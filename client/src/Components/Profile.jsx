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

  let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1];

	let tokenDecoded = decodeToken(token);
 console.log(tokenDecoded)
  return (
    <Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
      {token ? (
        <>
         <Nav />
        <Flex justifyContent='center' flexDirection='row'>
         <Box color='white'  width='25%' padding={4} minHeight='100vh'>
          <Flex justifyContent='center' alignItems='center' flexDirection='column'>
          <Heading as='h4' marginBottom={2}>Profile</Heading>
              <Image src={`${tokenDecoded.picture}`} alt="No img" marginBottom={4} width="250" height="300" ></Image>
              <Heading as='h3' marginBottom={2}>{`${tokenDecoded.name[0].toUpperCase()}${tokenDecoded.name.slice(1)}`}</Heading>
              <Heading as='h3' marginBottom={2}>{tokenDecoded.city}</Heading>
              <Heading as='h3' marginBottom={2} fontSize='2xl'>Rol: {tokenDecoded.role}</Heading>
              <Text marginBottom={2}>{tokenDecoded.email}</Text>
          </Flex>
          </Box>
          <Box color='white'  width='75%' padding={4} minHeight='100vh'>
         <Flex justifyContent='right' minHeight='85vh'>
          <Tabs/>
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
