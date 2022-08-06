import React from 'react';
import {useDispatch,useSelector} from 'react-redux';
import { addCart } from '../Redux/Actions/addToCart';
import { removeCart } from '../Redux/Actions/removeFromCart';
import { removeAllCart } from '../Redux/Actions/removeAllFromCart';
import styles from '../Styles/CartItem.module.css';
import imgdelete from '../Media/delete.png';
import { Box, Heading, Image, Button, Text, Flex, Center, useMediaQuery} from "@chakra-ui/react";
import { decodeToken } from 'react-jwt';
import { updateCart } from '../Redux/Actions/updateCart';


export default function CardItem({id, name, image, price, purchasedItem, quantity}) {

    const dispatch = useDispatch()
    const item = useSelector(state => state.cart)
    let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]
	let tokenDecoded = decodeToken(token1);
    
    function hundleAddItem() {
        if(purchasedItem < quantity ) {
            dispatch(addCart(id))
            dispatch(updateCart(tokenDecoded.id))
        }else alert('No more tickets available')
    }

    function hundleRemoveItem(){
        dispatch(removeCart(id))
        dispatch(updateCart(tokenDecoded.id))
    }

    function hundleDelete(){   // CLEAR CART BUTTON
        dispatch(removeAllCart(id))
        dispatch(updateCart(tokenDecoded.id))
    }

      //Responsive
      const [smallScreen] = useMediaQuery("(min-width: 1249px)");
      // w={!smallScreen ? "60%" : "45%"}

    return(
        <Center>
            <div className={styles.container}>
            <Box marginBottom={8} bg='#EEEEEE' borderRadius="10px" border='0px solid red'>
            <Box w={!smallScreen ? "90vw" : "80vw"}>
                <Flex justifyContent='space-around' alignItems='center'>
                <Image src={image} alt='img event' w={!smallScreen ? "75px" : "150px"} h={!smallScreen ? "75px" : "150px"}/>
                <Heading as='h4' fontSize={!smallScreen ? ".8em" : "1.5em"}>{name}</Heading>
                <Box>
                    <Flex flexDirection='column' alignItems='center'>
                        <Heading as='h5' fontSize={!smallScreen ? ".7em" : "1.5em"} marginBottom={4}>Quantity Item</Heading>
                    </Flex>
                <Box >
                <Flex alignItems='center'>
                    <Button w={!smallScreen ? "15px" : "30px"} h={!smallScreen ? "15px" : "30px"} borderRadius='5px' bg='#229ddb' color='white' onClick={() => hundleRemoveItem()} disabled={purchasedItem === 1 ? true : false }>-</Button>
                    <Text margin='0 .5em' fontSize={!smallScreen ? ".7em" : "1.5em"}>{purchasedItem}</Text>
                    <Button w={!smallScreen ? "15px" : "30px"} h={!smallScreen ? "15px" : "30px"} borderRadius='5px' bg='#229ddb' color='white' onClick={() => hundleAddItem()}>+</Button>
                </Flex>
                </Box>
                </Box>
            <Box>
                <Heading as='h5' fontSize={!smallScreen ? ".7em" : "1.5em"}>Price</Heading>
                <Text textAlign='center' fontSize={!smallScreen ? ".6em" : "1em"}>${price*purchasedItem}</Text>
            </Box>
            <img src={imgdelete} alt='not imgdelete' onClick={() => hundleDelete()} className={styles.imgdelete}/>
                </Flex>
            </Box>
            </Box>
            </div>
        </Center>
    )
}

