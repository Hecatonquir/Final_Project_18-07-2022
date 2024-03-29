import { React, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../Redux/Actions/clearCart";
import CardItem from "./CartItem";
import styles from "../Styles/Cart.module.css";
import imgcarrito from "../Media/emptycart.png";
import Nav from "./Nav";
import {
  Box,
  Button,
  /* Center, */ Heading,
  Text,
  Image,
  useMediaQuery,
  Flex,
} from "@chakra-ui/react";
import { decodeToken } from "react-jwt";
import { updateCart } from "../Redux/Actions/updateCart";
import { updateQuantity } from "../Redux/Actions/updateQuantity";
import { updateHistory } from "../Redux/Actions/updateHistory";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";
import { LOAD_CART } from "../Redux/ActionTypes/actiontypes";
import { v4 as uuidv4 } from "uuid";

export default function Cart() {
  let token = document.cookie.split(";")[0];
  let token1 = token.split("=")[1];
  let tokenDecoded = decodeToken(token1);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  var totalAmount = 0;
  const [showBuyButton, setshowBuyButton] = useState("hide");
  //console.log('🐲🐲🐲 / file: Cart.jsx / line 26 / cart', cart);

  /* if (cart.length) setshowBuyButton('show'); */
  // eslint-disable-next-line no-unused-vars
  const stripeKey =
    "pk_test_51LOdlpIX9UMpYaskAq0EOuQYBwCNO0CWWVUIouFgSt4FP4eNMznvWxSTuflGp35HmZKZidvlVZOCYNrlyvviDVrc00V1E8tivg";

  //Mail ID
  const SERVICE_ID = "service_7eiwsn5";
  const TEMPLATE_ID = "template_s6t7qdd"; // Ticket purchase confirmation
  const PUBLIC_KEY = "qkuGOFSooilyep5Ho";

  for (let i = 0; i < cart.length; i++) {
    totalAmount = totalAmount + cart[i].Price * cart[i].PurchasedItem;
  }

  function hundleClick() {
    // Clear cart button
    dispatch(clearCart());
    dispatch(updateCart(tokenDecoded.id));
  }

  async function handleToken(token) {
    console.log("Entered to handleToken");
    const response = await axios.post("/checkout", { token, totalAmount });
    const payback = response.data; // payback -> ARRAY ['success', token, charge, qr]
    console.log(payback[3]); // QR code
    console.log(payback);

    if (payback[0] === "success") {
      const itemsName = cart.map((it) => it.Name).join(" - ");
      const itemsQuantity = cart.reduce(function (sum, el) {
        return sum + el.PurchasedItem;
      }, 0);

      const templateParams = {
        email: payback[1].email,
        itemsName: itemsName,
        itemsQuantity: itemsQuantity,
        cardBrand: payback[1].card.brand,
        cardFunding: payback[1].card.funding,
        cardLast4: payback[1].card.last4,
        amount: payback[2].amount / 100,
        currency: payback[2].currency,
        receiptUrl: payback[2].receipt_url,
        qr: payback[3],
      };

      /////////////////////--->Envio de mail de confirmacion de pago <---///////////////////////////
      emailjs.send( SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY )
			.then((result) => { console.log(result.text); } , (error) => { console.log(error.text); });
      /////////////////////////////////////////////////////////////////////////////////////////////

      // Actualizacion de Stock de tickets en la base de datos (Quantity)
      const stockToUpdate = Promise.all(
        cart.map((it) =>
          updateQuantity({
            ID: it.ID,
            newStock: it.Quantity - it.PurchasedItem,
          })
        )
      );
      console.log(stockToUpdate);

      // Actualizacion de Shopping History del user
      let today = new Date().toISOString().slice(0, 16);
      const preCartHistory = cart.map((it) => ({
        eventID: it.ID,
        Name: it.Name,
        Quantity: it.PurchasedItem,
        datePaid: today,
        ticketID: uuidv4(),
        Image: it.Image,
      }));
      updateHistory(tokenDecoded.id, preCartHistory);

      toast.success(
        "Your purchase was successful! Check your E-mail for more information"
      );
      dispatch(clearCart());
      dispatch(updateCart(tokenDecoded.id));
      setshowBuyButton("done");
    } else toast.error("Something went wrong. Purchase cancelled");
  }

  useEffect(() => {
    if (cart.length) setshowBuyButton("show");
    if (token) {
      axios
        .put("/user/getUserById/" + tokenDecoded.id)
        .then((r) => dispatch({ type: LOAD_CART, payload: r.data.Cart }));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);

  //Responsive
  const [smallScreen] = useMediaQuery("(min-width: 900px)");
  const [small1Screen] = useMediaQuery("(min-width: 640px)");

  return (
    <Box bgGradient="linear(to-r, #222831, #393E46)" minH="100vh">
      <Nav />
      <Heading as="h4" margin={6} color="#EEEEEE">
        SHOPPING CART
      </Heading>

      <Text margin={6} color="#EEEEEE">
        Your selected events
      </Text>

      <Flex
        justifyContent="space-evenly"
        alignItems={!small1Screen ? "center" : "none"}
        flexDirection={!small1Screen ? "column" : "row"}
      >
        <Box className={styles.container}>
          <Box>
            {cart.length ? (
              cart.map((item) => (
                <Box key={item.ID}>
                  <CardItem
                    id={item.ID}
                    image={item.Image[0]}
                    name={item.Name}
                    price={item.Price}
                    purchasedItem={item.PurchasedItem}
                    quantity={item.Quantity}
                  />
                </Box>
              ))
            ) : (
              <Box>
                <Image
                  className={styles.imgcarrito}
                  src={imgcarrito}
                  alt="not imgcarrito"
                />
              </Box>
            )}
          </Box>
        </Box>

        <Box className={styles.containeramount}>
          <Heading
            as="h4"
            color="#EEEEEE"
            textAlign="center"
            fontSize={!smallScreen ? "1.5em" : "2em"}
          >
            Total Price: ${totalAmount} ARS
          </Heading>

          <Box>
            {showBuyButton === "show" ? (
              <Button
                className={styles.Button2}
                onClick={() => {
                  console.log("Me apretó!!");
                  setshowBuyButton("loading");
                }}
              >
                <StripeCheckout
                  stripeKey={stripeKey}
                  token={handleToken}
                  amount={totalAmount * 100}
                  /* el *100 es para convertirlo a centavos, NO para estafar a la gente */
                  name="Entradas Para los Eventos!"
                />
              </Button>
            ) : showBuyButton === "loading" ? (
              <h3 style={{ color: "#EEEEEE" }}>Loading...</h3>
            ) : (
              <h3 style={{ color: "#EEEEEE" }}>
                Thank you for your purchase! Have fun!
              </h3>
            )}
            <ToastContainer />
          </Box>
        </Box>
      </Flex>

      <br />

      <Box margin={6} textAlign="center">
        <Button
          bg="#FD7014"
          color="#EEEEEE"
          _hover={{ bg: "#EEEEEE", color: "black" }}
          onClick={() => hundleClick()}
        >
          Clear Cart
        </Button>
      </Box>

      <br />
    </Box>
  );
}
