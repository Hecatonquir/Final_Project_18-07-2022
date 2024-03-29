import React from "react";
// import styles from "../Styles/Detail.module.css";
// import { MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Box, Center, Heading, Image, Text, GridItem, Grid, Link, useMediaQuery, Flex } from "@chakra-ui/react";

function About() {
   //Responsive
 const [smallScreen] = useMediaQuery("(min-width: 600px)");

  return (
    <Box bgGradient="linear(to-r, #222831, #393E46)" minHeight='100vh'>

      <Heading as='h1' color='#EEEEEE' textAlign='center' marginBottom='1.5em' paddingTop='1em'>Developers</Heading>

      <Flex justifyContent='space-around' wrap='wrap' gap={6}>

      <Link href='https://www.linkedin.com/in/eliseo-tello-de-meneses-149151207/' isExternal _hover={{bg:'#2c2b2b', borderRadius:'20px'}}>
      <GridItem maxW={!smallScreen ? "50vw" : "100vw"} bg='#b1b7b76a' border='1px solid #88cfd938' p={2} boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a' borderRadius='20px' width='20em'>
          <Center>
          <Image
            src="https://ca.slack-edge.com/TPRS7H4PN-U030G7VNDK5-bc6056c9c3ae-512"
            className="img-fluid rounded-circle"
            alt="not imge"
            width={!smallScreen ? "100px" : "200px"}
          />
          </Center>
          <Text color='white' textAlign='center' fontSize={!smallScreen ? ".8em" : "1em"}>Eliseo Tello de Meneses</Text>
        </GridItem>
      </Link>

      <Link href='https://www.linkedin.com/in/jhonatan-prado-gutierrez-a0a832236/' isExternal _hover={{bg:'#2c2b2b', borderRadius:'20px'}}>
      <GridItem maxW={!smallScreen ? "50vw" : "100vw"} bg='#b1b7b76a' border='1px solid #88cfd938' p={2} boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;' borderRadius='20px' width='20em'>
          <Center>
          <Image
            src="https://ca.slack-edge.com/TPRS7H4PN-U035XQ4GA4U-1f1c3343d399-512"
            className="img-fluid rounded-circle"
            alt="not imge"
            width={!smallScreen ? "100px" : "200px"}
          />
          </Center>
          <Text color='white' textAlign='center' fontSize={!smallScreen ? ".8em" : "1em"}>Jhonatan Prado</Text>
        </GridItem>
      </Link>
       
      <Link href='https://www.linkedin.com/in/maximilian-springer-a65396217/' isExternal _hover={{bg:'#2c2b2b', borderRadius:'20px'}}>
      <GridItem maxW={!smallScreen ? "50vw" : "100vw"} bg='#b1b7b76a' border='1px solid #88cfd938' p={2} boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;' borderRadius='20px' width='20em'>
          <Center>
          <Image
            src="https://ca.slack-edge.com/TPRS7H4PN-U033A9ZF9JT-164114152404-512"
            className="img-fluid rounded-circle"
            alt="not imge"
            width={!smallScreen ? "100px" : "200px"}
          />
          </Center>
          <Text color='white' textAlign='center' fontSize={!smallScreen ? ".8em" : "1em"}>Maximilian Springer</Text>
        </GridItem>
      </Link>
      
      <Link href='https://www.linkedin.com/in/rober-figuer/' isExternal _hover={{bg:'#2c2b2b', borderRadius:'20px'}}>
      <GridItem maxW={!smallScreen ? "50vw" : "100vw"} bg='#b1b7b76a' border='1px solid #88cfd938' p={2} boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;' borderRadius='20px' width='20em'>
          <Center>
          <Image
            src="https://ca.slack-edge.com/TPRS7H4PN-U02E95Z104F-02042c258d1e-512"
            className="img-fluid rounded-circle"
            alt="not imge"
            width={!smallScreen ? "100px" : "200px"}
          />
          </Center>
          <Text color='white' textAlign='center' fontSize={!smallScreen ? ".8em" : "1em"}>Roberto Figueroa</Text>
        </GridItem>
      </Link>

        <Link href='https://www.linkedin.com/in/cesar-leon-634940236/' isExternal _hover={{bg:'#2c2b2b', borderRadius:'20px'}}>
        <GridItem maxW={!smallScreen ? "50vw" : "100vw"} bg='#b1b7b76a' border='1px solid #88cfd938' p={2} boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;' borderRadius='20px' width='20em'>
          <Center>
          <Image
            src="https://media-exp1.licdn.com/dms/image/C4D03AQEOlBm_Qvc3Vg/profile-displayphoto-shrink_800_800/0/1660090463333?e=1665619200&v=beta&t=sQtxfqZl_klQNO_NWqPmHi1XRLWuX8lhxXgSRi3oyFw"
            className="img-fluid rounded-circle"
            alt="not imge"
            width={!smallScreen ? "100px" : "200px"}
          />
          </Center>
          <Text color='white' textAlign='center' fontSize={!smallScreen ? ".8em" : "1em"}>Cesar Abel León</Text>
        </GridItem>
        </Link>

        <Link href='https://www.linkedin.com/in/sol-r%C3%A1zuri/' isExternal _hover={{bg:'#2c2b2b', borderRadius:'20px'}}>
        <GridItem maxW={!smallScreen ? "50vw" : "100vw"} bg='#b1b7b76a' border='1px solid #88cfd938' p={2} boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;' borderRadius='20px' width='20em'>
          <Center>
          <Image
            src="data:image/jpeg;base64,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"
            className="img-fluid rounded-circle"
            alt="not imge"
            width={!smallScreen ? "100px" : "200px"}
          />
          </Center>
          <Text color='white' textAlign='center' fontSize={!smallScreen ? ".8em" : "1em"}>Sol Abigail Rázuri Fiorilli</Text>
        </GridItem>
        </Link>

        <Link href='https://www.linkedin.com/in/eric-daniel-brianso/' isExternal _hover={{bg:'#2c2b2b', borderRadius:'20px'}}>
        <GridItem maxW={!smallScreen ? "50vw" : "100vw"} bg='#b1b7b76a' border='1px solid #88cfd938' p={2} boxShadow=' 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;' borderRadius='20px' width='20em'>
          <Center>
          <Image
            src="https://ca.slack-edge.com/TPRS7H4PN-U02TQ4K8GT0-4ef7b483ca22-512"
            className="img-fluid rounded-circle"
            alt="not imge"
            width={!smallScreen ? "100px" : "200px"}
          />
          </Center>
          <Text color='white' textAlign='center' fontSize={!smallScreen ? ".8em" : "1em"}>Eric Briansó</Text>
        </GridItem>
        </Link>
      </Flex>
    </Box>
  );
}
export default About;
