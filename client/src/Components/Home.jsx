/* eslint-disable no-unused-vars */
import { React, useState, useEffect, useRef, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../Redux/Actions/getUserDetails.js";
import getEvents from "../Redux/Actions/getEvents.js";
import ButtonFilter from "./ButtonFilter.jsx";
import EventCard from "./EventCard.jsx";
import NavBar from "./NavBar.jsx";
import EventCarousel from "./Carousel.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import registerGmail from "../Redux/Actions/registerGmail.js";
import { LOAD_CART, UPDATE_STATE_TRUE } from "../Redux/ActionTypes/actiontypes.js";
import Footer from "./Footer.jsx";
import { decodeToken, isExpired } from "react-jwt";
import { Box, SimpleGrid, Center, Text, Flex, StylesProvider, useMediaQuery } from "@chakra-ui/react";
import BackToTopButton from "./BackToTopButton.jsx";
import axios from "axios";
import Loader from "./Loader.jsx";
import styles from "../Styles/Home.module.css";
import Search from "./Search.jsx";
import { updateCart } from "../Redux/Actions/updateCart.js";
//import CalendarEvents from './Calendar.jsx ';
import { getUserByID2 } from "../Redux/Actions/getUserByID2";
import updateGlobalFav from "../Redux/Actions/updateGlobalFav";

export default function Home() {
	const { user, logout } = useAuth0();
	let token = document.cookie.split(";")[0];
	let token1 = token.split("=")[1];
	let tokenDecoded = decodeToken(token1);
	const dispatch = useDispatch();
	const events = useSelector((state) => state.showToUser);
	const stateUser = useSelector((state) => state.loginState);
	const backup = useSelector((state) => state.eventsBackUp);
	const carrouselEvents = backup.filter((ev) => ev.Carrousel);
	let [search, setSearch] = useState("");
	let [userLoc, setLoc] = useState([]);

	navigator.geolocation.getCurrentPosition((p) => {
		setLoc([p.coords.latitude, p.coords.longitude]);
	});

	let today = new Date().toISOString().slice(0, 16);

	let orderedEvents = events.slice(); // Esto me sirve para crear una copia en memoria DISTINTA del array events

	orderedEvents = orderedEvents
		.map((e) => {
			return {
				...e,
				distancia: Math.sqrt((e.Coords[0] - userLoc[0]) ** 2 + (e.Coords[1] - userLoc[1]) ** 2),
			};
		})
		.sort((a, b) => a.distancia - b.distancia);

	orderedEvents.forEach((ev, i) => {
		let evDate = ev.Date.toLocaleString().slice(0, 16);
		if (evDate < today) {
			orderedEvents.splice(i, 1);
		}
	});

	carrouselEvents.forEach((ev, i) => {
		let evDate = ev.Date.toLocaleString().slice(0, 16);
		if (evDate < today) {
			carrouselEvents.splice(i, 1);
		}
	});

	if (!stateUser && user) {
		dispatch(registerGmail(user, logout));
	}

	useEffect(() => {
		if (!stateUser && token) {
			dispatch({ type: UPDATE_STATE_TRUE });
		}
		if (token1) {
			dispatch(getUserDetails(tokenDecoded.id));
			dispatch(getUserByID2(tokenDecoded.id));
			axios
				.put("/user/getUserById/" + tokenDecoded.id)
				.then((r) => dispatch({ type: LOAD_CART, payload: r.data.Cart }));
			axios
				.put("/user/getUserById/" + tokenDecoded.id)
				.then((r) => dispatch({ type: "LOAD_FAV", payload: r.data.Favourites }));
		}

		dispatch(getEvents());

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	//Responsive
	const [mediumScreen] = useMediaQuery("(min-width: 1249px)");
	// w={!mediumScreen ? "60%" : "45%"}

	return (
		<Box bgGradient="linear(to-r, #222831, #393E46)" minHeight="100vh">
			<Box padding="0" position="fixed" zIndex="100" width="100%">
				<NavBar stateUser={stateUser} />
			</Box>

			<Box paddingTop="9vh">
				<EventCarousel carrouselEvents={carrouselEvents} />
			</Box>

			<Box width="90%" className={styles.contentFilters}>
				<ButtonFilter search={search} setSearch={setSearch} />
				{/* <div className={styles.search}><CalendarEvents/></div> */}
			</Box>

			<Center>
				<Box marginTop={10} marginBottom={10}>
					<div className={styles.contentCards}>
						{orderedEvents.filter((el) => el.isErased !== true).length ? (
							orderedEvents
								.filter((el) => !el.isErased && el.isLive)
								.map((event) => (
									<Box key={event.ID} p={2} textAlign="center">
										<EventCard
											key={event.ID}
											id={event.ID}
											name={event.Name}
											image={event.Image[0]}
											date={event.Date}
											category={event.Category}
											price={event.Price}
											quantity={event.Quantity}
											city={event.City}
											location={event.Location}
										/>
									</Box>
								))
						) : (
							<Flex justifyContent="center" width="100vw">
								<Box fontSize="4em" fontFamily="cursive" color="#FD7014" textAlign="center">
									<Text>No Events Found</Text>
								</Box>
							</Flex>
						)}
					</div>
				</Box>
			</Center>
			<BackToTopButton />
			<Footer />
		</Box>
	);
}
