import React from "react"
import { useSelector, useDispatch } from "react-redux"
import {Link} from 'react-router-dom'
import { Box, Button, Heading, Flex, SimpleGrid, Text } from "@chakra-ui/react";
import ticketDone from "../Redux/Actions/markTicketAsDone"
export default function UserTickets() {



let usersT = useSelector(state => state.usersBackUp)
let adminTickets = usersT.find(el => el.Role === "Admin")
let dispatch = useDispatch()


return (
    <Box bg='#393E46' minHeight='100vh'>
        <Box bg='#222831'>
            <Link to="/welcomeA">
            <Button margin={2} bg='#FD7014' color='white'>Back</Button>
          </Link>
          </Box>
        <Flex justifyContent='center' mt={6}>
            <Heading color='white' >Tickets from Users</Heading>
        </Flex>
        <Flex justifyContent='center'>
        <SimpleGrid columns={3} spacing={5}>
            {adminTickets && adminTickets.supports.map(el =>(
            <Box bg='#EEEEEE' w='25rem' h='15rem' borderRadius='10px' margin={10} padding={5}>
                <Text>{el.problemType}:</Text>
                <Text mt={3} color={el.done? 'green' : 'red'}>{el.reason}</Text>
                <Text mt={3}>Mail: {el.emailCustomer}</Text>
                <Button bg='#FD7014' color='white' size='sm' mt={5} onClick={() => ticketDone(dispatch,el.supportID, el.done? false: true)}>{el.done? "Mark as Pending":"Mark as Done"}</Button>
            </Box>  
            ))}
        </SimpleGrid>
        </Flex>
    </Box>
)


}