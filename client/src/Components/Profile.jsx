import React, { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import { Link } from 'react-router-dom';
import styles from "../Styles/Profile.module.css";
import { decodeToken } from "react-jwt";
import Nav from "./Nav";
import Tabs from "./UserAccount.jsx";
import {
  Box,
  Flex,
  Heading,
  Image,
  Text,
  Button,
  useMediaQuery,
} from "@chakra-ui/react";
// import styles from '../Styles/User.module.css';
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import get2FA from "../Redux/Actions/get2FA";
import updateUser from "../Redux/Actions/updateUser";
import { getUserDetails } from "../Redux/Actions/getUserDetails";

function Profile() {
  let dispatch = useDispatch();
  let { user } = useAuth0();
  //   let userTicket = useSelector(state => state.userDetails)
  let token = document.cookie.split(";")[0];
  let token1 = token.split("=")[1];

  let tokenDecoded = decodeToken(token1);

  let [changePass, setPass] = useState(false);

  let [input, setInput] = useState("");

  useEffect(() => {
    if (token1) {
      axios
        .put("/user/getUserById/" + tokenDecoded.id)
        .then((r) =>
          dispatch({ type: "LOAD_FAV", payload: r.data.Favourites })
        );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  //Responsive
  const [smallScreen] = useMediaQuery("(min-width: 430px)");
  const [smallScreen1] = useMediaQuery("(min-width: 740px)");

  return (
    <Box bg="#393E46" minHeight="100vh">
      {token && token ? (
        <>
          <Nav />
          <Flex justifyContent="center" alignItems="center" flexDirection={!smallScreen1 ? "column" : "row"}>

            <Box color="#EEEEEE" width="25%" padding={4} className={styles.contentProfile}>

              <Flex justifyContent="center" alignItems="center" flexDirection="column">

                <Heading as="h4" marginBottom={2} className={styles.title}>
                  Profile
                </Heading>

                <Image
                  src={`${tokenDecoded.picture && tokenDecoded.picture}`}
                  alt="No img"
                  marginBottom={4}
                  lassName={styles.img}
                  borderRadius="15px">
                </Image>

                <Heading as="h3" marginBottom={2} className={styles.name}>
                  {`${tokenDecoded.name[0].toUpperCase()}${tokenDecoded.name.slice(1)}` || user.name}
                </Heading>

                <Heading as="h3" marginBottom={2}>
                  {tokenDecoded.city ? tokenDecoded.city : null}
                </Heading>

                <Heading as="h3" marginBottom={2} fontSize="2xl" className={styles.user}>
                  Rol: {tokenDecoded.role || "User"}
                </Heading>

                <Text marginBottom={2} className={styles.email}>{tokenDecoded.email}</Text>

                <Heading as='h5' className={styles.security}>Security: </Heading>

                <button className={styles.btn} onClick={() => setPass(changePass ? false : true)}>
                  Change Password
                </button>

                <input
                  hidden={changePass ? false : true}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}>
                </input>
                
                <Button
                  m={1}
                  size="sm"
                  hidden={changePass ? false : true}
				          bg="#FD7014"
				          color="#EEEEEE"
				          _hover={{ bg: "#EEEEEE", color: "black" }}
                  onClick={() => updateUser({ Password: input }, tokenDecoded.id, dispatch)}>
                    Save
                </Button>

                <button className={styles.btn} onClick={() => get2FA(tokenDecoded.id, tokenDecoded.email)}>
                  GET 2FA AUTHENTICATION
                </button>

                <span className={styles.span}>
                  *Note: You will need to add "Authenticator" as a browser extension.
                </span>

                {/* <label>Tickets</label>
                {userTicket && userTicket.supports.length && userTicket.supports.map((el,i) => (
                  <div key={i}>
                    <label>Problem Type</label>
                    <h1>{el.problemType}</h1>
                    <label>Description:</label>
                    <h1>{el.reason}</h1>
                    <label>Response From Support</label>
                    <label>{el.reply? el.reply: "Waiting for response"}</label>
                    <label>Status</label>
                    <h1>{el.done? "Solved!": "Pending"}</h1>
                  </div> 
                ))} */}

              </Flex>

            </Box>

            <Box width="75%" padding={4} className={styles.contentFav}>

              <Flex justifyContent="right" minHeight="85vh" bg="#FD7014">

                <Tabs tokenDecoded={tokenDecoded} />

              </Flex>

            </Box>

          </Flex>
        </>
      ) : (
        <>
          <Nav />

          <Flex justifyContent="center" alignItems="center" height="90vh">
            
            <Box
              color="white"
              bg="gray"
              width="50%"
              padding={4}
              borderRadius="2%"
            >
              <Heading
                as="h1"
                textAlign="center"
                margin={6}
                fontSize={!smallScreen ? "1em" : "2em"}
              >
                You need to register first
              </Heading>
            </Box>
          </Flex>
        </>
      )}
    </Box>
  );
}

export default Profile;
