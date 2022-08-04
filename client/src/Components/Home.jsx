/* eslint-disable no-unused-vars */
import { React, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getEvents from "../Redux/Actions/getEvents.js";
import ButtonFilter from "./ButtonFilter.jsx";
import EventCard from "./EventCard.jsx";
import NavBar from "./NavBar.jsx";
import EventCarousel from "./Carousel.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import registerGmail from "../Redux/Actions/registerGmail.js";
import {
  LOAD_CART,
  UPDATE_STATE_TRUE,
} from "../Redux/ActionTypes/actiontypes.js";
import Footer from "./Footer.jsx";
import { decodeToken, isExpired } from "react-jwt";
import {
  Box,
  SimpleGrid,
  Center,
  Text,
  Flex,
  StylesProvider,
} from "@chakra-ui/react";
import BackToTopButton from "./BackToTopButton.jsx";
import axios from "axios";
import Loader from "./Loader.jsx";
import styles from "../Styles/Home.module.css";
import Search from "./Search.jsx";
import { updateCart } from "../Redux/Actions/updateCart.js";
//import CalendarEvents from './Calendar.jsx ';

export default function Home() {
  const { user, logout } = useAuth0();
  let token = document.cookie.split(";")[0];
  let token1 = token.split("=")[1];
  let tokenDecoded = decodeToken(token1);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.showToUser);
  const stateUser = useSelector((state) => state.loginState);
  const backup = useSelector((state) => state.eventsBackUp);
  let [search, setSearch] = useState("");

  let today = new Date().toISOString().slice(0, 16);

  let orderedEvents = events.slice(); // Esto me sirve para crear una copia en memoria DISTINTA del array events

  orderedEvents.forEach((ev, i) => {
    let evDate = ev.Date.toLocaleString().slice(0, 16);
    if (evDate < today) {
      orderedEvents.splice(i, 1);
    }
  });
  const carrouselEvents = orderedEvents.filter((ev) => ev.Carrousel);

  if (!stateUser && user) {
    dispatch(registerGmail(user, logout));
  }
  useEffect(() => {
    if (!stateUser && token) {
      dispatch({ type: UPDATE_STATE_TRUE });
    }
    if (token1) {
      axios
        .put("/user/getUserById/" + tokenDecoded.id)
        .then((r) => dispatch({ type: LOAD_CART, payload: r.data.Cart }));
    }
    dispatch(getEvents());
    /* return () => {}; */
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box bgGradient="linear(to-r, #222831, #393E46)" minHeight="100vh">
      <Box padding="0" position="fixed" zIndex="100" width="100%">
        <NavBar stateUser={stateUser} />
      </Box>
      <Box paddingTop="5.6rem">
        <EventCarousel carrouselEvents={carrouselEvents} />
      </Box>


			<Center>
				<Box marginTop={10} marginBottom={10}>
					<SimpleGrid columns={2} spacing={10}>
						{events.length ? (
							events
								.filter((el) => !el.isErased && el.isLive)
								.map((event) => (
									<Box
										key={event.ID}
										p={2}
										// boxShadow={
										// 	event.InitialQtty !== 0 && event.Quantity === 0
										// 		? '5px 5px 10px #ff568c, -5px -5px 10px #ff568c'
										// 		: event.Price === 0
										// 		? '5px 5px 10px #56ffb0, -5px -5px 10px #56ffb0'
										// 		: '10px 10px 20px #2a2929, -10px -10px 20px #494848'
										// }
										textAlign='center'>
										<EventCard
											key={event.ID}
											id={event.ID}
											name={event.Name}
											image={event.Image[0]}
											date={event.Date}
											category={event.Category}
											price={event.Price === 0 ? ' Free!' : event.Price}
											quantity={event.Quantity}
											city={event.City}
											location={event.Location}
										/>
									</Box>
								))
						) : (
							<Flex justifyContent='center' width='100vw'>
								<Box fontSize='4em' fontFamily='cursive' color='#FD7014' textAlign='center'>
									<Text>No Events Found</Text>
								</Box>
							</Flex>
						)}
					</SimpleGrid>
				</Box>
			</Center>
			<BackToTopButton />
			<Footer />
		</Box>
	);


