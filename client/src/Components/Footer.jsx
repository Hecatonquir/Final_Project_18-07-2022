import React from "react";
// import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Box, Text, Heading, Link, Flex } from "@chakra-ui/react";
import ContactUs from "./ContacUs";

function Footer() {
  

  return (
    <Box color='white' bg='#222831'>
      <Flex>
        <Box width='50%' textAlign='center'>
          <Heading as="h5" fontSize={20}>MAIN-STAGE</Heading>
          <Text>
            designed and built with all the love in the world by the
            MAIN-STAGE team with the help of our collaborators. Version: 1.0
          </Text>
        </Box>
        <Box width='50%' textAlign='center'>
        <Heading as="h5" fontSize={20}>LINKS</Heading>
          <Flex flexDirection='column'>
          <Link
            color='white'
            _hover={{color:'#FD7014'}}
            href="https://github.com/Hecatonquir/Final_Project_18-07-2022 "
            isExternal>
            GitHub
          </Link>
          <Link 
            isExternal
            color='white'
            _hover={{color:'#FD7014'}}>
            <ContactUs/>
          </Link>
          <Link 
            href="/aboutUs" 
            isExternal
            color='white'
            _hover={{color:'#FD7014'}}>
            About Us
          </Link>
          </Flex>
        </Box>
      </Flex>
      <Box width='100%' textAlign='center'>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link href="#!">MAIN-STAGE</Link>
        </Box>
    </Box>
  );

}

export default Footer;
