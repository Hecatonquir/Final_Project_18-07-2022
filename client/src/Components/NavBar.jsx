import React from "react";
import {useSelector,useDispatch} from "react-redux"
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/NavBar.module.css"
import {useAuth0} from "@auth0/auth0-react"
import imgcarrito from '../Media/carri.png'
import {isExpired, decodeToken} from "react-jwt"
import logOut from "../Redux/Actions/logOut";
import Search from "./Search.jsx";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";


function NavBar(){
  let {isAuthenticated,logout,user} = useAuth0()

  let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
  console.log(document.cookie)
	let tokenDecoded = decodeToken(token)
 let dispatch = useDispatch()
  const logoutState = useSelector((state) => state.allEvents)
  const cart = useSelector((state) => state.cart)
  const events = useSelector((state) => state.showToUser);
  const active = useSelector((state) => state.loginState)
  const count = cart.length

	
//  return (
//     <Box marginBottom={6} padding={2} bgGradient='linear(to-b, #a28748, #6c5727)'>
//       <Flex justifyContent="space-around" alignItems="center">
//         <Box>
//           <Heading as="h4" color='white'>Events Henry</Heading>
//         </Box>
//         <Search />
//         <Box>
//           <Flex alignItems="center" width="35em" justifyContent="space-between">
//             <Box>
//               {!isAuthenticated ? (
//                 <Button bg='#1a78b1' onClick={() => loginWithRedirect()}>
//                   <span>Log In/Sign Up</span>
//                 </Button>
//               ) : (
//                 <Button bg='#1a78b1' onClick={() => logout()}>
//                   <span>Log Out</span>
//                 </Button>
//               )}
//               {isAuthenticated && (
//                 <Link to="/createEvent">
//                   <Button marginLeft={4} bg='#1a78b1'>Create an Event</Button>
//                 </Link>
//               )}
//             </Box>

//             {isAuthenticated ? (
//               <Box>
//                 <Link to="/profile">
//                   <Button bg='#1a78b1'>
//                     <span>Profile</span>
//                   </Button>
//                 </Link>
//               </Box>
//             ) : (
//               <Box></Box>
//             )}
//             <Box>
//               <Link to="/contact">
//                 <Button bg='#1a78b1'>
//                   <span>Contact Us</span>
//                 </Button>
//               </Link>
//             </Box>
//             <Box>
//               <Link to="/cart">
//                 <Image src={imgcarrito} alt="img carrito" width={10} />
//                 <span className={styles.count}>{count}</span>
//               </Link>
//             </Box>
//           </Flex>
//         </Box>
//       </Flex>
//     </Box>
//   ) 

	
  return(
      <Box marginBottom={6} padding={2} bgGradient='linear(to-b, #a28748, #6c5727)'>
        <Flex justifyContent="space-around" alignItems="center">
          <Box>
            <Heading as="h4" color='white'>Events Henry</Heading>
          </Box>
          <Search />
        </Flex>
        <Box>
          <Flex alignItems="center" width="35em" justifyContent="space-between">
            <Box>
              {!token  || isExpired(token) || !active ? 
                <Box> 
                  <Link to="/login">
                    <Button bg='#1a78b1'>Login/Sign Up</Button>
                  </Link>
                </Box>
                : <Box></Box>}

                  {!isExpired(token) && tokenDecoded.role !== "Guest" && active && 
                    <Button className={styles.Button} onClick={() => (logOut("access-token",dispatch, isAuthenticated, logout))}>
                      <Text>Log Out</Text>
                    </Button>}


 

                  {token && tokenDecoded.role === "Partner"  && active && 
                    <Link to="/createEvent">
                      <Button bg='#1a78b1'>Create an Event</Button>
                    </Link>}
              </Box>
              {token && active && 
                  <Box>
                    <Link to='/profile'>
                      <Button bg='#1a78b1'>
                        <Text>Profile</Text>
                      </Button>
                    </Link>
                  </Box>
                  }
              <Box>
                  <Link to='/contact'>
                      <Button bg='#1a78b1'>
                        <Text>Contact Us</Text>
                     </Button>
                 </Link>
              </Box>
              <Box>
              <Link to="/cart">
                <Image src={imgcarrito} alt="img carrito" width={10} />
                <span className={styles.count}>{count}</span>
              </Link>
            </Box>
          </Flex>
        </Box>
      </Box>

     
  )
};


export default NavBar;
