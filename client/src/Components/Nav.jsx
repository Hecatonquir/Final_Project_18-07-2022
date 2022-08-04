import React from "react";
import { Link } from "react-router-dom";
import { Box, Button, Heading , Image, Flex} from "@chakra-ui/react";
import ms from "../Media/ms.gif"
import mst from "../Media/mst.png"
function Nav() {
  return (
    <>
    <Flex alignItems='colums' alignContent="center" >
      <Box bg="#222831">
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
      <Heading display="flex" justifyContent="center">
      <Image  
              
							src={ms}
							alt='img logo'
							width='3vw'
							height='3vh'
							marginLeft='35%'
							marginTop='5%'
						/>
        <Image 
         src={mst}
         alt='img logo'
         width="10vw"
         height="10vh"
         /* marginLeft="35%" */
        /*  marginTop="1%" */
        />  <Image
        src={ms}
        alt='img logo'
        width='3vw'
        height='3vh'
        marginLeft='2%'
        marginTop='5%'
      />
						
					</Heading>
        
      </Flex>
    </>
  );
}

export default Nav;
