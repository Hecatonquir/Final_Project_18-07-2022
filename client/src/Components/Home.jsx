import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getEvents from '../Redux/Actions/getEvents.js';
import ButtonFilter from './ButtonFilter.jsx';
import EventCard from './EventCard.jsx';
import NavBar from './NavBar.jsx';
import Search from './Search.jsx';
import EventCarousel from './Carousel.jsx';
// import Loader from './Loader.jsx';
// import CalendarEvents from './Calendar.jsx';
import styles from '../Styles/Home.module.css';
import Footer from './Footer.jsx';
import { decodeToken, isExpired } from 'react-jwt';
import { useAuth0 } from '@auth0/auth0-react';
import registerGmail from '../Redux/Actions/registerGmail.js';
import { UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes.js';

import { Box, SimpleGrid, Center, Text, Flex } from '@chakra-ui/react';

export default function Home() {
	const { isAuthenticated, user } = useAuth0();
	let token = document.cookie
		.split(';')
		.filter((el) => el.includes('access-token'))
		.toString()
		.split('=')[1];
	let tokenDecoded = decodeToken(token);
	const dispatch = useDispatch();
	const events = useSelector((state) => state.showToUser);
	const stateUser = useSelector((state) => state.loginState);
	const backup = useSelector((state) => state.eventsBackUp);
	const carrouselEvents = backup.filter((ev) => ev.Carrousel);

	//console.log(tokenDecoded)

	if (!token) {
		dispatch(registerGmail(user));
	}

	useEffect(() => {
		if (!stateUser && token) {
			dispatch({ type: UPDATE_STATE_TRUE });
		}
		dispatch(getEvents());

		return () => {};
	}, [stateUser]);

	<Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
		<Box>
		
			<NavBar />
			
			<Box>
				<EventCarousel />
			</Box>
		</Box>
		<Box className={styles.welcome} >
			{stateUser || !isExpired(token) ? (
				<p>Welcome {tokenDecoded ? tokenDecoded.name : 'Guest'}</p>
			) : (
				<p>Welcome Guest</p>
			)}
		</Box>
		<Box>
			<ButtonFilter />
			{/* <CalendarEvents /> */}
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
								boxShadow=' 10px 10px 20px #2a2929, -10px -10px 20px #494848;'
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
					) : (  <Flex justifyContent='center'>
						<Box fontSize='4em' fontFamily='cursive' color='#D69E2E'>
							<Text >No Events Found</Text>
						</Box>
						</Flex>
					)}
				</SimpleGrid>
			</Box>
		</Center>
		<Footer />
	</Box>;

	return (
		<Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
			<Box>
				<NavBar />
				<Box>
					<EventCarousel carrouselEvents={carrouselEvents} />
				</Box>
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
				{/* <CalendarEvents /> */}
			</Box>

			<div className={styles.search}>
				<Search />
			</div>
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
									boxShadow=' 10px 10px 20px #2a2929, -10px -10px 20px #494848;'
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
						<Flex justifyContent='center' width='100vw'>
							<Box fontSize='4em' fontFamily='cursive' color='#D69E2E' textAlign='center'>
								<Text >No Events Found</Text>
							</Box>
							</Flex>
						)}
					</SimpleGrid>
				</Box>
			</Center>
			<Footer />
		</Box>
	);
}
