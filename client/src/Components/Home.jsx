import { React, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getEvents from '../Redux/Actions/getEvents.js';
import ButtonFilter from './ButtonFilter.jsx';
import EventCard from './EventCard.jsx';
import NavBar from './NavBar.jsx';
/* import Search from './Search.jsx'; */
import EventCarousel from './Carousel.jsx';
// import Loader from './Loader.jsx' ;
// import CalendarEvents from './Calendar.jsx ';
import styles from '../Styles/Home.module.css';
import Footer from './Footer.jsx';
import { decodeToken, isExpired } from 'react-jwt';
import { useAuth0 } from '@auth0/auth0-react';
import registerGmail from '../Redux/Actions/registerGmail.js';
import { LOAD_CART, UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes.js';

import { Box, SimpleGrid, Center, Text, Flex } from '@chakra-ui/react';
import BackToTopButton from './BackToTopButton.jsx';
// eslint-disable-next-line no-unused-vars
import { updateCart } from '../Redux/Actions/updateCart.js';
import axios from 'axios';

export default function Home() {
	const { user, logout } = useAuth0();
	let token = document.cookie.split(';')[0];
	let token1 = token.split('=')[1];
	let tokenDecoded = decodeToken(token1);
	const dispatch = useDispatch();
	const events = useSelector((state) => state.showToUser);
	const stateUser = useSelector((state) => state.loginState);
	const backup = useSelector((state) => state.eventsBackUp);
	const carrouselEvents = backup.filter((ev) => ev.Carrousel);
	let [search, setSearch] = useState('');

	if (!stateUser && user) {
		dispatch(registerGmail(user, logout));
	}
	useEffect(() => {
		if (!stateUser && token) {
			dispatch({ type: UPDATE_STATE_TRUE });
		}
		if (token1) {
			axios
				.put('/user/getUserById/' + tokenDecoded.id)
				.then((r) => dispatch({ type: LOAD_CART, payload: r.data.Cart }));
		}

		dispatch(getEvents());

		return () => {};
	}, []);

	return (
		<Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
			<Box padding='0' position='fixed' zIndex='100' width='100%'>
				<NavBar stateUser={stateUser} />
			</Box>
			<Box paddingTop='5.6rem'>
				<EventCarousel carrouselEvents={carrouselEvents} />
			</Box>

			<Box
				width='90%'
				alignContent='center'
				alignItems='center'
				marginLeft='5%'
				marginTop='0px'
				padding='0px'>
				<ButtonFilter search={search} setSearch={setSearch} />
				{/* <div className={styles.search}><CalendarEvents/></div> */}
			</Box>

			<Center>
				<Box marginTop={10} marginBottom={10}>
					<SimpleGrid columns={2} spacing={10}>
						{events.length ? (
							events
								.filter((el) => el.isErased !== true)
								.map((event) => (
									<Box
										key={event.ID}
										bg='#b1b7b76a'
										border='1px solid #88cfd938'
										p={2}
										boxShadow={
											event.InitialQtty !== 0 && event.Quantity === 0
												? '5px 5px 10px #ff568c, -5px -5px 10px #ff568c'
												: event.Price === 0
												? '5px 5px 10px #56ffb0, -5px -5px 10px #56ffb0'
												: '10px 10px 20px #2a2929, -10px -10px 20px #494848'
										}
										borderRadius='20px'
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
								<Box fontSize='4em' fontFamily='cursive' color='#D69E2E' textAlign='center'>
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
}
{
	/*<Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
<Box>
	<NavBar />
</Box>
<Box>
	<EventCarousel />
</Box>

<Box className={styles.welcome}>
	{stateUser || !isExpired(token) ? (
		<p>Welcome {tokenDecoded ? tokenDecoded.name : 'Guest'}</p>
	) : (
		<p>Welcome Guest</p>
	)}
</Box>
<Box>
	<ButtonFilter />
	 <CalendarEvents /> 
</Box>

 <Center>
	<Box marginTop={10} marginBottom={10}>
		<SimpleGrid columns={2} spacing={10}>
			{events.length ? (
				events.map((event) => (
					<Box
						key={event.ID}
						bg='#b1b7b76a'
						border='1px solid #88cfd938'
						p={6}
						boxShadow={
							event.Price !== 0
								? '10px 10px 20px #2a2929, -10px -10px 20px #494848'
								: '5px 5px 10px #56ffb06e, -5px -5px 10px #56ffb06e'
						}
						borderRadius='20px'
						textAlign='center'>
						<EventCard
							key={event.ID}
							id={event.ID}
							name={event.Name}
							image={event.Image[0]}
							date={event.Date}
							category={event.Category}
							price={event.Price === 0 ? ' Free' : event.Price}
							quantity={event.Quantity}
							city={event.City}
							location={event.Location}
						/>
					</Box>
				))
			) : (
				<Flex justifyContent='center'>
					<Box fontSize='4em' fontFamily='cursive' color='#D69E2E'>
						<Text>No Events Found</Text>
					</Box>
				</Flex>
			)}
		</SimpleGrid>
	</Box>
</Center>
<Footer />
</Box>; */
}
