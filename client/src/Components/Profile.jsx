import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import styles from "../Styles/Profile.module.css";
import {decodeToken} from "react-jwt"
import Nav from './Nav'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";


function Profile() {

  let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1];
	let tokenDecoded = decodeToken(token);
	console.log("soy el profile",tokenDecoded);

  return (
    <Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
      {token ? (
        <>
         <Nav />
         <Flex justifyContent='center' alignItems='center' height='90vh'>
         <Box color='white' bg='gray' width='50%' padding={4}  borderRadius="2%">
          <Flex justifyContent='center' alignItems='center' flexDirection='column'>
          <Heading as='h4' marginBottom={6}>Profile</Heading>
              <Image src={`${tokenDecoded.picture}`} alt="No img" marginBottom={6}></Image>
              <Heading as='h3' marginBottom={6}>{`${tokenDecoded.name[0].toUpperCase()}${tokenDecoded.name.slice(1)}`}</Heading>
              <Heading as='h3' marginBottom={6}>{tokenDecoded.city}</Heading>
              <Text marginBottom={6}>{tokenDecoded.email}</Text>
          </Flex>
          </Box>
         </Flex>
        </>
      ) : (
        <Flex justifyContent='center' alignItems='center' height='90vh'>
          <Box color='white' bg='gray' width='50%' padding={4}  borderRadius="2%">
            <Heading as='h1' textAlign='center' margin={6}>You need to register first</Heading>
          </Box>
        </Flex>
      )}
    </Box>
  );

}

export default Profile;
