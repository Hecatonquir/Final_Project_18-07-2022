import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import { getUserDetails } from "../Redux/Actions/getUserDetails"
import { useParams, Link } from "react-router-dom"
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';
import Nav from './Nav'
import { Box, Flex, Text, Heading, Image, SimpleGrid } from "@chakra-ui/react";

export default function PartnerPanel() {
    
    let navigate = useNavigate();
    let dispatch = useDispatch()
    let user = useSelector(state => state.userDetails)
    let id = useParams()
    let token = document.cookie
	.split(';')[0]
let token1 = 
	token
	.split('=')[1]
let tokenDecoded = decodeToken(token1);
console.log(tokenDecoded )
    useEffect(() => {
        if(tokenDecoded && tokenDecoded.role === "User" ) {
            navigate("/")
        } if(!tokenDecoded) {
            navigate("/")
        }
        dispatch(getUserDetails(id))
        
    },[])

          
      


    return (
        <Box bg='#393E46' minHeight='100vh'>
            <Nav />
            <Heading as='h4' color='white' textAlign='center' mt='1em' >Control Panel</Heading>
            <Flex justifyContent='center' flexDirection='row'>

            <Box color='#EEEEEE'   width='25%' padding={4} minHeight='100vh'>
                
                {user && 
                <Flex justifyContent='center' alignItems='center' flexDirection='column'>
                    <Text m={2}>Welcome {user.Name}</Text>
                    <Text m={2}>Username: {user.Username}</Text>
                    <Text m={2}>Email: {user.Email}</Text>
                    <Text m={2}>City: {user.City}</Text>
                    <Text m={2}>Location: {user.Location}</Text>
                </Flex>
                }
            </Box>


            <Box width='75%' padding={4} minHeight='100vh' >
            <SimpleGrid columns={3} spacing={4}>
                {user && user.events && user.events.filter(el => !el.isErased)
                .map(el =>  (
                    <div key={el.ID}>
                        <Box bg='#EEEEEE' w='20em' borderRadius='5px'>
                            <Flex justifyContent='center'>
                        <Link to={`/details/id/${el.ID}`}>
                        <Text textAlign='center'>Event: {el.Name}</Text>
                        <Image src={el.Image} alt="No Img" width='12em' height='12em'/>
                        <Text textAlign='center'>Price: {el.Price}</Text>
                        <Text textAlign='center'>Quantity: {el.Quantity}</Text>
                        <Text textAlign='center'>Earnings: {(el.InitialQtty - el.Quantity) * el.Price}</Text>
                        <Text textAlign='center'>Status: {el.isLive ? "Active": "Pending for approval"}</Text>
                        <Text textAlign='center'>{el.isErased? "This event is closed/Ban": "ON"}</Text>
                        </Link>
                            </Flex>
                        </Box>
                        </div>
                    ))}
                </SimpleGrid>
            </Box>
            </Flex>

        {user && 
        <div>Note, you will receive your earnings for each event 48 hours after event end.</div>}

        </Box>
    )




}