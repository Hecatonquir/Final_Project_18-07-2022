import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import styles from "../Styles/NavBar.module.css";
import { useAuth0 } from "@auth0/auth0-react";
import imgcarrito from "../Media/carri.png";
import imglogo from "../Media/logo2.png";
import { isExpired, decodeToken } from "react-jwt";
import logOut from "../Redux/Actions/logOut";
import Search from "./Search.jsx";
import { Box, Button, Flex, Heading, Image, Text } from "@chakra-ui/react";
import {
  CLEAR_CART,
  UPDATE_STATE_TRUE,
} from "../Redux/ActionTypes/actiontypes";
import styles2 from "../Styles/Home.module.css";
function NavBar({ stateUser }) {
  let { isAuthenticated, logout, user } = useAuth0();
  let token = document.cookie.split(";")[0];
  let token1 = token.split("=")[1];

  console.log(document.cookie);
  let tokenDecoded = decodeToken(token1);
  let dispatch = useDispatch();
  const logoutState = useSelector((state) => state.allEvents);
  const cart = useSelector((state) => state.cart);
  const events = useSelector((state) => state.showToUser);
  const active = useSelector((state) => state.loginState);
  let count = cart ? cart.length : null;

  return (
    <Box marginBottom={4} padding={1} bg="#222831">
      <Flex
        alignItems="center"
        width="100%"
        justifyContent="space-between"
        margin="0.5rem"
        position="sticky"
        top="0px"
        zIndex="10"
      >
        <Box>
          <Heading as="h4" color="white">
            <Image
              src={imglogo}
              alt="img logo"
              width="6rem"
              height="4rem"
              marginLeft="1rem"
              marginTop="0rem"
            />
          </Heading>
        </Box>

        <Box className={styles2.welcome} marginTop="5px">
          {stateUser || !isExpired(token) ? (
            <Text color="#FD7014" marginLeft='2em' textAlign='center'>
              Welcome {tokenDecoded ? tokenDecoded.name : "Guest"}
            </Text>
          ) : (
            <Text color="#FD7014" fontWeight='bold' fontSize='1.2em'>Welcome Guest</Text>
          )}
        </Box>

        <Box>
          {!token ? (
            <Box marginLeft="5rem">
              <Link to="/login">
                <Button
                  bg="#FD7014"
                  color="white"
                  _hover={{ bg: "#EEEEEE", color: "black" }}
                >
                  Login/Sign Up
                </Button>
              </Link>
            </Box>
          ) : (
            <Box></Box>
          )}
          {token && (
            <Button
              marginLeft="24rem"
              marginRight="2rem"
              bg="#FD7014"
              _hover={{ bg: "#EEEEEE", color: "black" }}
              className={styles.Button}
              color="white"
              onClick={() => {
                dispatch({ type: CLEAR_CART });
                return logOut(dispatch);
              }}
            >
              <Text>Log Out</Text>
            </Button>
          )}
          {/* {token && tokenDecoded.role === 'Partner' && active && (
							<Link to='/createEvent'>
								<button className={styles.Button}>Create an Event</button>
							</Link>
						)} */}
        </Box>

        <Flex width="40%" justifyContent='space-evenly'>
          <Box>
            {token &&
              tokenDecoded &&
              tokenDecoded.role === "Partner" &&
              active && (
                  <Link to="/createEvent">
                    <Button
                      bg="#FD7014"
                      color="white"
                      _hover={{ bg: "#EEEEEE", color: "black" }}
                    >
                      Create an Event
                    </Button>
                  </Link>
              )}
          </Box>

		  <Box>
		  {token && active && (
                <Link to="/profile">
                  <Button
                    bg="#FD7014"
                    color="white"
                    _hover={{ bg: "#EEEEEE", color: "black" }}
                  >
                    <Text>Profile</Text>
                  </Button>
                </Link>
            )}
		  </Box>
        </Flex>

        <Box>
          <Link to={token ? "/cart" : "/login"}>
            <Image
              src={imgcarrito}
              alt="img carrito"
              width="3rem"
              marginRight="1rem"
            />
            <span className={styles.count}>{count}</span>
          </Link>
        </Box>
      </Flex>
    </Box>
  );
}

export default NavBar;
