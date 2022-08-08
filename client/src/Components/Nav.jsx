import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Heading, Image, Flex } from "@chakra-ui/react";
import ms from "../Media/ms.gif";
import mst from "../Media/mst.png";
import styles from '../Styles/NavBar.module.css';

function Nav() {
  return (
    <>
      <Flex alignItems="colums" alignContent="center" bg="#222831">
        <Box zIndex="10">
          <Link to="/">
            <Button
              margin={2}
              bg="#FD7014"
              color="#EEEEEE"
              _hover={{ bg: "#EEEEEE", color: "black" }}
            >
              Back
            </Button>
          </Link>
        </Box>
        <Box display="flex" justifyContent="center" className={styles.contentLogo}>
          <Image
            src={ms}
            marginLeft="35%"
            marginTop="5%"
            className={styles.img}
          />
          <Image
            src={mst}
            alt="img logo"
            className={styles.logo}
            /* marginLeft="35%" */
            /*  marginTop="1%" */
          />{" "}
          <Image
            src={ms}
            alt="img logo"
            marginLeft="2%"
            marginTop="5%"
            className={styles.img}
          />
        </Box>
      </Flex>
    </>
  );
}

export default Nav;
