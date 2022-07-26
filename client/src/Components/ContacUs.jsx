import React, {useState} from 'react';
import {useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'
import { postSupports } from '../Redux/Actions/postSupports';
// import styles from '../Styles/ContactUs.module.css';
import swal from 'sweetalert';
import Nav from './Nav'
import { Box, Button, Heading, FormControl,FormLabel, Flex, Select, Center, Textarea  } from "@chakra-ui/react";

export default function ContactUs(){
     const dispatch = useDispatch()
    const [note, setNote] = useState({
        reason:"",
        problemType:""
    })

    const handleChange = function (e){
         setNote({
            ...note,
            [e.target.name]: e.target.value
            
        })}

     function handleSubmit(e){
        e.preventDefault();
        if(note.reason.length > 0 && note.problemType.length > 0){
       dispatch(postSupports(note))
       // alert("Note was created successfully")
        setNote({reason:"",
        problemType:""})
        }else{
            swal(
                "fill formulary",{
                    icon:"warning"
                })
           
                
        }}


return (
    <Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
        <Nav />
        <Flex justifyContent='center' alignItems='center' height='90vh'>
        <Box bg='gray' width='50%' padding={4}  borderRadius="2%">
            <Heading as='h4' color='white' textAlign='center' marginBottom={4}>Contact Us</Heading>
            <form onSubmit={handleSubmit}>
            <FormControl marginBottom={4}>
                    <FormLabel fontSize='1.3em'>Tell Us your problem:</FormLabel>
                    <Select placeholder='Select options'>
                        <option>return tickets</option>
                        <option>problems with the pay</option>
                        <option>inappropriate event</option>
                        <option>suggestions</option>
                        <option>report bugs</option>
                        <option>others</option>
                    </Select>
                </FormControl>
                <Textarea id="exampleFormControlTextarea1" rows="3" type='text' name='reason' value={note.reason} onChange={handleChange} marginBottom={4}></Textarea>
                <Center>
                    <Button type='submit'>Create Note</Button> 
                </Center>
            </form>
        </Box>
        </Flex>
    </Box>
)
}
