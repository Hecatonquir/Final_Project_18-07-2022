import React, {useState} from "react"
import { useSelector, useDispatch } from "react-redux"
import { Box, Button, Flex, SimpleGrid, Text, Input } from "@chakra-ui/react";
import ticketDone from "../Redux/Actions/markTicketAsDone"
import ticketReply from "../Redux/Actions/ticketReply";

export default function UserTickets() {



let usersT = useSelector(state => state.usersBackUp)
let adminTickets = usersT.find(el => el.Role === "Admin")
let dispatch = useDispatch()
let [actReply, setReply] = useState(false)
let [input, setInput] = useState("")
return (
    <Box>
        <Flex justifyContent='center' mt={1}>
        </Flex>
        <Flex justifyContent='center'>
        <SimpleGrid columns={3} spacing={4}>
            {adminTickets && adminTickets.supports.map(el =>(
            <Flex bg='#ACAFB0 ' w='28rem' minH='14rem' borderRadius='10px' margin={3} padding={3} flexDirection='column' >
                <Text>{el.problemType}:</Text>
                <Text mt={1} color={el.done? 'green' : 'red'}>{el.reason}</Text>
                <Text mt={1}>Email: {el.emailCustomer}</Text>
                <Flex flexDirection='row' justifyContent='space-between'>
                    <Button bg='#FD7014' color='white' size='sm' mt={1} w='10em' p='0.5em' onClick={() => ticketDone(dispatch,el.supportID, el.done? false: true)}>{el.done? "Mark as Pending":"Mark as Done"}</Button>
                    <Button bg='#35A15E' color='white' size='sm' mt={1} w='10em' p='0.5em' onClick={() => setReply(actReply? false: true)}>Reply to Customer</Button>
                </Flex>
                <Input hidden={actReply? false: true} value={input} bg='white' size='sm' mt='0.5em' p='0.5em' onChange={((e) => setInput(e.target.value) )}></Input>
                <Button bg='#35A15E' color='white' w='10em' size='md' p='0.5em' hidden={actReply? false: true} onClick={() => ticketReply(input, el.supportID)}>Send</Button>
            </Flex>  
            ))}
        </SimpleGrid>
        </Flex>
    </Box>
)


}