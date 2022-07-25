import { React } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/Actions/clearCart";
import CardItem from "./CartItem";
// import styles from '../Styles/Cart.module.css'
import Nav from "./Nav";
import { Box, Button, Center, Heading, Text } from "@chakra-ui/react";

export default function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  var totalAmount = 0;

  for (let i = 0; i < cart.length; i++) {
    totalAmount = totalAmount + cart[i].Price * cart[i].PurchasedItem;
  }

  function hundleClick() {
    dispatch(clearCart());
  }

  // return(
  //     <div>
  //         <nav className={styles.nav}>
  //         <Link to='/'><button className={styles.Button}>BACK</button></Link>
  //         </nav>
  //         <h4 className={styles.title}>SHOPPING CART</h4>
  //         <p className={styles.subtitle}>Your selected events</p>
  //         {
  //             cart && cart.map( (item) => (
  //                 <div key={item.ID}>
  //                     <CardItem
  //                     id={item.ID}
  //                     name={item.Name}
  //                     image={item.Image}
  //                     price={item.Price}
  //                     purchasedItem={item.PurchasedItem}
  //                     />
  //                 </div>
  //             ))
  //         }
  //         <div className={styles.amount}>
  //         <h4>Total Price: ${totalAmount}</h4>
  //         </div>
  //         <div className={styles.divButton}>
  //             <button className={styles.Button2} onClick={() => hundleClick()}>Remove</button>
  //             <button className={styles.Button2}>Buy</button>
  //         </div>
  //     </div>
  // )

  return (
    <Box bgGradient="linear(to-r, #1c2333, #371a1e)" minHeight='100vh'>
      <Nav />
      <Heading as="h4" margin={6} color="white">
        SHOPPING CART
      </Heading>
      <Text margin={6} color="white">
        Your selected events
      </Text>
      {cart &&
        cart.map((item) => (
          <div key={item.ID}>
            <CardItem
              id={item.ID}
              name={item.Name}
              image={item.Image}
              price={item.Price}
              purchasedItem={item.PurchasedItem}
            />
          </div>
        ))}
        <Center>
        <Box margin={6}>
        <Heading as="h4" color="white">
          Total Price: ${totalAmount}
        </Heading>
      </Box>
      <Box margin={6}>
        <Button onClick={() => hundleClick()} marginRight={6} bg="#f4a69a">
          Remove
        </Button>
        <Button bg="#f4a69a">Buy</Button>
      </Box>
        </Center>
    </Box>
  );
}
