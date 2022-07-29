import React from 'react';
import {useDispatch} from 'react-redux';
import { addCart } from '../Redux/Actions/addToCart';
import { removeCart } from '../Redux/Actions/removeFromCart';
import { removeAllCart } from '../Redux/Actions/removeAllFromCart';
import styles from '../Styles/CartItem.module.css';
import imgdelete from '../Media/delete.png';
import { Box, Heading, Image, Button, Text, Flex, Center} from "@chakra-ui/react";
import { decodeToken } from 'react-jwt';
import { updateCart } from '../Redux/Actions/updateCart';


export default function CardItem({id, name, image, price, purchasedItem}) {

    const dispatch = useDispatch()
    let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1];
	let tokenDecoded = decodeToken(token);
   
    function hundleAddItem() {
        dispatch(addCart(id))
        dispatch(updateCart(tokenDecoded.id))
    }

    function hundleRemoveItem(){
        dispatch(removeCart(id))
        dispatch(updateCart(tokenDecoded.id))
    }

    function hundleDelete(){
        dispatch(removeAllCart(id))
        dispatch(updateCart(tokenDecoded.id))
    }

    return(
        <Center>
            <div className={styles.container}>
            <Box marginBottom={8} bg='white' borderRadius="10px" border='0px solid red'>
            <Box width='80vw'>
                <Flex justifyContent='space-around' alignItems='center'>
                <Image src={image} alt='img event'width='150px' height='150px'/>
                <Heading as='h4' fontSize='1.5em'>{name}</Heading>
                <Box>
                    <Flex flexDirection='column' alignItems='center'>
                        <Heading as='h5' fontSize='1.5em' marginBottom={4}>Quantity Item</Heading>
                    </Flex>
                <Box >
                <Flex alignItems='center'>
                    <Button width='30px' height='30px' borderRadius='5px' bg='#229ddb' color='white' onClick={() => hundleRemoveItem()}>-</Button>
                    <Text margin='0 .5em' fontSize='1.5em'>{purchasedItem}</Text>
                    <Button width='30px' height='30px' borderRadius='5px' bg='#229ddb' color='white' onClick={() => hundleAddItem()}>+</Button>
                </Flex>
                </Box>
                </Box>
            <Box>
                <Heading as='h5' fontSize='1.5em'>Price</Heading>
                <Text textAlign='center'>${price*purchasedItem}</Text>
            </Box>
            {/* <Button bg='#e94646' color='white' borderRadius='40px' onClick={() => hundleDelete()}>Delete</Button> */}
            <img src={imgdelete} alt='not imgdelete' onClick={() => hundleDelete()} className={styles.imgdelete}/>
                </Flex>
            </Box>
            </Box>
            </div>
        </Center>
    )
}

