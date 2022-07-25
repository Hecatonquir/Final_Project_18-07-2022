import React from "react";
// import { MDBFooter, MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import { Box, Text, Heading, Link, Flex } from "@chakra-ui/react";

function Footer() {
  // return (
  //   <MDBFooter
  //     bgColor="primary"
  //     className="text-white text-center text-lg-left"
  //   >
  //     <MDBContainer className="p-4">
  //       <MDBRow>
  //         <MDBCol lg="6" md="12" className="mb-4 mb-md-0">
  //           <h5 className="text-uppercase">EVENTS HENRY</h5>

  //           <p>
  //             Diseñado y construido con todo el amor del mundo por el equipo de
  //             HENRY EVENTS con la ayuda de nuestros colaboradores . version: 1.0
  //           </p>
  //         </MDBCol>
  //         <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
  //           <h5 className="text-uppercase">Links</h5>

  //           <ul className="list-unstyled mb-0">
  //             <li>
  //               <a
  //                 href="https://github.com/Hecatonquir/Final_Project_18-07-2022"
  //                 className="text-white"
  //               >
  //                 GitHub
  //               </a>
  //             </li>
  //             <li>
  //               <a href="#!" className="text-white">
  //                 About Us
  //               </a>
  //             </li>
  //           </ul>
  //         </MDBCol>
  //       </MDBRow>
  //     </MDBContainer>

  //     <div
  //       className="text-center p-3"
  //       style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  //     >
  //       &copy; {new Date().getFullYear()} Copyright:{" "}
  //       <a className="text-white" href="#!">
  //         EVENTS HENRY
  //       </a>
  //     </div>
  //   </MDBFooter>
  // )

  return (
    <Box color='gray.700' bgGradient='linear(to-t, #a28748, #6c5727)'>
      <Flex>
        <Box width='50%' textAlign='center'>
          <Heading as="h5" fontSize={20}>EVENTS HENRY</Heading>
          <Text>
            Diseñado y construido con todo el amor del mundo por el equipo de
            HENRY EVENTS con la ayuda de nuestros colaboradores. Version: 1.0
          </Text>
        </Box>

        <Box width='50%' textAlign='center'>
        <Heading as="h5" fontSize={20}>LINKS</Heading>
          <Flex flexDirection='column'>
          <Link
            href="https://github.com/Hecatonquir/Final_Project_18-07-2022 "
            isExternal>
            GitHub
          </Link>
          <Link href="#!" isExternal>
            About Us
          </Link>
          </Flex>
        </Box>
      </Flex>
      <Box width='100%' textAlign='center'>
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <Link href="#!">EVENTS HENRY</Link>
        </Box>
    </Box>
  );
}

export default Footer;
