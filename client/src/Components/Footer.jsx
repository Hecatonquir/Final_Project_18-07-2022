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
            Diseñado y construido con todo el amor del mundo por el equipo de
            MAIN-STAGE con la ayuda de nuestros colaboradores. Version: 1.0
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
