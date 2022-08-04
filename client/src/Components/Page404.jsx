// import { Link } from "react-router-dom";
// import styles from '../Styles/Page404.module.css'
import img404 from '../Media/404page.png'
import Nav from "./Nav";
import { Box, Flex, Image, useMediaQuery, Center } from '@chakra-ui/react';


export default function PageNotFound (){
    //Responsive
  const [smallScreen] = useMediaQuery("(min-width: 769px)");

    return(
        <Box bg='#EEEEEE'  minHeight='100vh'>
            <Nav />
            <Flex justifyContent='center' alignItems='center' minHeight='90vh'>
                <Center>
                    <Image src={img404} alt='not img404' minHeight='90%' w={!smallScreen ? "90%" : "100%"}/>
                </Center>
            </Flex>
        </Box>
    )
}