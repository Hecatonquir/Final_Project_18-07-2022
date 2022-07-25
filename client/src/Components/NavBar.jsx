import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../Styles/NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import imgcarrito from "../Media/carri.png";
import Search from "./Search.jsx";
import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";

function NavBar() {
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  console.log(user);
  const cart = useSelector((state) => state.cart);

  const count = cart.length;

  //   return(
  //       <nav className={styles.nav}>
  //           <div>
  //             <h4>Events Henry</h4>
  //           </div>
  //           <div className={styles.menu}>

  //               <div>
  //              { !isAuthenticated ?
  //                       <button className={styles.Button} onClick={() => loginWithRedirect()}>
  //                         <span>Log In/Sign Up</span>
  //                      </button>
  //                  :

  //                       <button className={styles.Button} onClick={() => logout()}>
  //                         <span>Log Out</span>
  //                      </button>

  // }
  //   {isAuthenticated && <Link to="/createEvent">

  //             <button className={styles.Button}>Create an Event</button>
  //                      </Link>}
  //             </div>

  //             {isAuthenticated? <div>
  //                  <Link to='/profile'>
  //                       <button className={styles.Button}>
  //                         <span>Profile</span>
  //                      </button>
  //                  </Link>
  //             </div>:<div></div>}
  //             <div>
  //                   <Link to='/contact'>
  //                       <button className={styles.Button}>
  //                         <span>Contact Us</span>
  //                      </button>
  //                  </Link>
  //               </div>
  //               <div>
  //                   <Link to='/cart'>
  //                     <img className={styles.imgcarrito} src={imgcarrito} alt='img carrito' />
  //                     <span className={styles.count}>{count}</span>
  //                     </Link>
  //               </div>
  //           </div>
  //       </nav>

  //   )

  return (
    <Box marginBottom={6} padding={2} bgGradient='linear(to-b, #a28748, #6c5727)'>
      <Flex justifyContent="space-around" alignItems="center">
        <Box>
          <Heading as="h4" color='white'>Events Henry</Heading>
        </Box>
        <Search />
        <Box>
          <Flex alignItems="center" width="35em" justifyContent="space-between">
            <Box>
              {!isAuthenticated ? (
                <Button bg='#1a78b1' onClick={() => loginWithRedirect()}>
                  <span>Log In/Sign Up</span>
                </Button>
              ) : (
                <Button bg='#1a78b1' onClick={() => logout()}>
                  <span>Log Out</span>
                </Button>
              )}
              {isAuthenticated && (
                <Link to="/createEvent">
                  <Button marginLeft={4} bg='#1a78b1'>Create an Event</Button>
                </Link>
              )}
            </Box>

            {isAuthenticated ? (
              <Box>
                <Link to="/profile">
                  <Button bg='#1a78b1'>
                    <span>Profile</span>
                  </Button>
                </Link>
              </Box>
            ) : (
              <Box></Box>
            )}
            <Box>
              <Link to="/contact">
                <Button bg='#1a78b1'>
                  <span>Contact Us</span>
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
      </Flex>
    </Box>
  );
}

export default NavBar;
