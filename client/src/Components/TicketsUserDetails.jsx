import React from 'react'
import {useSelector} from 'react-redux'
import { Box, Flex, Heading, Text, SimpleGrid } from '@chakra-ui/react';

export default function TicketsUserDetails() {

    let userTicket = useSelector(state => state.userDetails)
    let token = document.cookie.split(';')[0];
    
    return(
        <Box>
            {token && token ? (
                <Flex justifyContent='center'>
                {userTicket.supports.length ?
                <SimpleGrid columns={2} spacing={4}>
                        {userTicket && userTicket.supports.length && userTicket.supports.map((el,i) => (
                            <div key={i}>
                            <Flex bg='white ' w='25rem' minH='14rem' borderRadius='10px' margin={3} padding={3} flexDirection='column' >          
                                    <Text mt={1}>Problem Type: {el.problemType}</Text>
                                    <Text mt={2}>Description:</Text>
                                    <Text>{el.reason}</Text>
                                    <Text mt={2}>Response From Support: </Text>
                                    <Text>{el.reply? el.reply: "Waiting for response"}</Text>
                                    <Text mt={2}>Status: </Text>
                                    <Text color={el.done?'green':'red'}>{el.done? "Solved!": "Pending"}</Text>
                            </Flex>
                            </div>
                        ))}
                </SimpleGrid>
                : 
                <div>
                    <Heading color='white' mt='1em' >You have no generated tickets</Heading>
                </div>
                }
                </Flex>
            ) 
            :
                 <div>
                    You need to register first
                </div>   
                }
        </Box>
    )
}