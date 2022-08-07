import React, {useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { Box, Button, Heading, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ticketDone from "../Redux/Actions/markTicketAsDone"
import { updateEvent } from "../Redux/Actions/updateEvent";
import { decodeToken } from 'react-jwt';
import { useNavigate } from 'react-router-dom';


export default function EventRequest() {
     
    let token = document.cookie
	.split(';')[0]
let token1 = 
	token
	.split('=')[1]
let tokenDecoded = decodeToken(token1);
let navigate = useNavigate();

let fullEvents = useSelector(state => state.eventsBackUp)
let request = fullEvents.filter(el => !el.isLive)
let dispatch = useDispatch()
useEffect( () => {
    if(tokenDecoded && tokenDecoded.role === "User") {
       navigate("/")
   }
   if(!tokenDecoded) {
       navigate("/")
   }})

return (
    <Box>
        <Flex justifyContent='center'>
        <SimpleGrid columns={3} spacing={4}>
            {request.length && request.map(el =>(
               
                <Flex bg='#ACAFB0 ' w='28rem' minH='14rem' borderRadius='10px' margin={3} padding={3} flexDirection='column' >
                    <Link to={`/details/id/${el.ID}`}>
                    <Text mt={2}>Event: {el.Name}</Text>
                    </Link> 
                    <Text mt={2} >Partner: {el.users[0] && el.users[0].Username}</Text>
                    <Text mt={2} >Mail: {el.users[0] && el.users[0].Email}</Text>
                    <Button bg='green' color='white' w='10em' size='sm' mt={5} p={3} onClick={() => updateEvent({isLive: true},el.ID, dispatch)}>Approve</Button>
                </Flex>
                
            ))}
        </SimpleGrid>
        </Flex>
    </Box>
)
            }