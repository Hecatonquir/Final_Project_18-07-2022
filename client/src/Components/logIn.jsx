import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logInUser } from "../Redux/Actions/logInUser";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "../Styles/User.module.css";
import img1 from "../Media/google.png";
import { isExpired, decodeToken } from "react-jwt";
import { useDispatch, useSelector } from "react-redux";
import {
  Box,
  Heading,
  Input,
  Text,
  Flex,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
import Nav from "./Nav";
import { useCookies } from "react-cookie";
import { UPDATE_STATE_TRUE } from "../Redux/ActionTypes/actiontypes";

function LogIn() {
  let dispatch = useDispatch();
  let navigate = useNavigate();
  let token = document.cookie.split(";")[0];
  let token1 = token.split("=")[1];
  let tokenDecoded = decodeToken(token1);
  let active = useSelector((state) => state.loginState);

  const { loginWithRedirect } = useAuth0();
  const [cookies, setCookie] = useCookies(["access-control"]);
  const [input, setInput] = useState({
    username: "",
    password: "",
    token:"",
  });

  const handleChange = function (e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitButton = function (e) {
    e.preventDefault();
    if(input.token && input.username && input.password){
    logInUser(input, navigate, dispatch, setCookie);}
  };

  if (token) {
    dispatch({ type: UPDATE_STATE_TRUE });
  }

  //Responsive
  const [smallScreen] = useMediaQuery("(min-width: 430px)");

  return (
    <Box bgGradient="linear(to-r, #222831, #393E46)" minHeight="100vh">
      {!active ? (
        <Box>
          <Nav />
          <Box>
            <Flex justifyContent="center" alignItems="center" minHeight="90vh">
              <Box
                bg="gray"
                p={4}
                marginTop={4}
                borderRadius="2%"
                w={!smallScreen ? "60%" : "45%"}
              >
                <Heading
                  as="h2"
                  color="white"
                  textAlign="center"
                  marginBottom={6}
                >
                  Login
                </Heading>
                <Input
                  type="text"
                  name="username"
                  onChange={handleChange}
                  placeholder="Username"
                  value={input.username}
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  color="white"
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
                  color="white"
                  variant="flushed"
                  marginBottom={6}
                />
                <Input
                  type="password"
                  name="token"
                  onChange={handleChange}
                  placeholder="2FA"
                  value={input.token}
                  _placeholder={{ opacity: 0.4, color: "inherit" }}
                  color="white"
                  variant="flushed"
                  marginBottom={6}
                />

                <Box textAlign="center" marginBottom={8}>
                  <Button
                    onClick={submitButton}
                    bg="#FD7014"
                    color="#EEEEEE"
                    _hover={{ bg: "#EEEEEE", color: "black" }}
                  >
                    Login
                  </Button>
                </Box>

                <Box color="white" marginBottom={8}>
                  <Flex
                    justifyContent="space-around"
                    alignItems="center"
                    flexDirection={!smallScreen ? "column" : "row"}
                    textAlign='center'
                  >
                    <Text>Don't have an account?</Text>
                    <Link to="/register">
                      <Text color="#EEEEEE" _hover={{ color: "#FD7014" }}>
                        Register
                      </Text>
                    </Link>
                  </Flex>
                </Box>

                <Box textAlign="center" marginBottom={6}>
                  <Button
                    onClick={() => {
                      loginWithRedirect();
                      navigate("/");
                    }}
                    bg="#EEEEEE"
                    color="black"
                    _hover={{ bg: "#FD7014", color: "#EEEEEE" }}
                    w={!smallScreen ? "10em" : "13em"}
                  >
                    <img src={img1} alt="not img" className={styles.icon} />
                    <Text fontSize={!smallScreen ? ".8em" : "1em"}>
                      Continue with google
                    </Text>
                  </Button>
                </Box>
              </Box>
            </Flex>
          </Box>
        </Box>
      ) : (
        <Box bgGradient="linear(to-r, #222831, #393E46)" minHeight="100vh">
          <Nav />
          <Flex justifyContent="center" alignItems="center" minHeight="90vh">
            <Box>
              <Text color="white" fontSize="3.4em">
                Oops, you missed something? You are Logged In!
              </Text>
            </Box>
          </Flex>
        </Box>
      )}
    </Box>
  );
}

export default LogIn;
