import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
// import styles from "../Styles/Profile.module.css";
import Nav from './Nav'
import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  // return (
  //   <div>
  //     {isAuthenticated ? (
  //       <>
  //         {/* <nav className={styles.nav}>
  //           <Link to="/">
  //             <button className={styles.Button}>Back</button>
  //           </Link>
  //         </nav> */}
  //         <Nav />

  //         <div className={styles.container}>
  //           <h4 className={styles.title}>Profile</h4>
  //             <img src={`${user.picture}`} alt="No Image" className={styles.img}></img>
  //             <h3 className={styles.name}>{user.name}</h3>
  //             <span className={styles.email}>{user.email}</span>
  //         </div>
  //       </>
  //     ) : (
  //       <h1>You need to register first</h1>
  //     )}
  //   </div>
  // );



  return (
    <Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
      {isAuthenticated ? (
        <>
          <Nav />
          <Flex justifyContent='center' alignItems='center' height='90vh'>
          <Box color='white' bg='gray' width='50%' padding={4}  borderRadius="2%">
            <Flex justifyContent='center' alignItems='center' flexDirection='column'>
            <Heading as='h4' marginBottom={6}>Profile</Heading>
              <Image src={`${user.picture}`} alt="No Image" marginBottom={6}></Image>
              <Heading as='h3' marginBottom={6}>{user.name}</Heading>
              <Text marginBottom={6}>{user.email}</Text>
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
