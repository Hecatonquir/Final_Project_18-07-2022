import React from "react";
import { useDispatch } from "react-redux";
import { addCart } from "../Redux/Actions/addToCart";
import { removeCart } from "../Redux/Actions/removeFromCart";
import { removeAllCart } from "../Redux/Actions/removeAllFromCart";
// import styles from '../Styles/CartItem.module.css'
import {
  Box,
  Heading,
  Image,
  Button,
  Text,
  Flex,
  Center,
} from "@chakra-ui/react";

export default function CardItem({ id, name, image, price, purchasedItem }) {
  const dispatch = useDispatch();

  function hundleAddItem() {
    dispatch(addCart(id));
  }

  function hundleRemoveItem() {
    dispatch(removeCart(id));
  }

  function hundleDelete() {
    dispatch(removeAllCart(id));
  }

//   return(
//       <div className={styles.containerTotal}>
//           <div className={styles.container}>
//           <h4>{name}</h4>
//           <img className={styles.img} src={image} alt='img event' />
//           <div>
//               <h5>Quantity Item</h5>
//               <div className={styles.quantity}>
//                   <button className={styles.operation} onClick={() => hundleRemoveItem()}>-</button>
//                   <p className={styles.purchased}>{purchasedItem}</p>
//                   <button className={styles.operation} onClick={() => hundleAddItem()}>+</button>
//               </div>
//           </div>
//           <div>
//               <h5>Price</h5>
//               <p>${price*purchasedItem}</p>
//           </div>
//           <button className={styles.Button2 }onClick={() => hundleDelete()}>Delete</button>
//           </div>
//       </div>
//   )


  return(
    <Center>
        <Box marginBottom={8} bg='gray' borderRadius="10px" border='3px solid red'>
        <Box width='80vw'>
            <Flex justifyContent='space-around' alignItems='center'>
                <Heading as='h4' fontSize='2em'>{name}</Heading>
                <Image src={image} alt='img event'width='150px' height='150px'/>
                <Box>
            <Flex flexDirection='column' alignItems='center'>
            <Heading as='h5' fontSize='1.5em' marginBottom={4}>Quantity Item</Heading>
            <Box>
                <Flex alignItems='center'>
                <Button width='30px' height='30px' borderRadius='5px' bg='#229ddb' color='white' onClick={() => hundleRemoveItem()}>-</Button>
                <Text margin='0 .5em' fontSize='1.5em'>{purchasedItem}</Text>
                <Button width='30px' height='30px' borderRadius='5px' bg='#229ddb' color='white' onClick={() => hundleAddItem()}>+</Button>
                </Flex>
            </Box>
            </Flex>
                </Box>
                <Box>
            <Heading as='h5' fontSize='1.5em'>Price</Heading>
            <Text textAlign='center'>${price*purchasedItem}</Text>
                </Box>
                <Button bg='#e94646' color='white' borderRadius='40px' onClick={() => hundleDelete()}>Delete</Button>
            </Flex>
        </Box>
    </Box>
    </Center>
)



}
