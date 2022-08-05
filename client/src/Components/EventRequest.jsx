import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { Box, Button, Heading, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ticketDone from "../Redux/Actions/markTicketAsDone"
import { updateEvent } from "../Redux/Actions/updateEvent";
export default function EventRequest() {



let fullEvents = useSelector(state => state.eventsBackUp)
let request = fullEvents.filter(el => !el.isLive)
let dispatch = useDispatch()


return (
    <Box bg='#393E46' minHeight='100vh'>
        <Box bg='#222831'>
            <Link to="/welcomeA">
            <Button margin={2} bg='#FD7014' color='white'>Back</Button>
          </Link>
          </Box>
        <Flex justifyContent='center' mt={6}>
            <Heading color='white' >Event Request</Heading>
        </Flex>
        <Flex justifyContent='center'>
        <SimpleGrid columns={3} spacing={5}>
            {request.length && request.map(el =>(
               
            <Box bg='#EEEEEE' w='25rem' h='15rem' borderRadius='10px' margin={10} padding={5}>
                 <Link to={`/details/id/${el.ID}`}>
                <Text>{el.problemType}:</Text>
                <Text mt={3} color={el.isLive? 'green' : 'red'}>{el.Name}</Text>
                <Text mt={3}>Partner: {el.users[0] && el.users[0].Username}</Text>
                <Text mt={3}>Mail: {el.users[0] && el.users[0].Email}</Text>
                </Link>  
                <Button bg='#FD7014' color='white' size='sm' mt={5} onClick={() => updateEvent({isLive: true},el.ID, dispatch)}>Approve</Button>
            </Box>
           
            ))}
        </SimpleGrid>
        </Flex>
    </Box>
)
            }