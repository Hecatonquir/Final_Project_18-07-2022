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
import {decodeToken, isExpired} from "react-jwt"
import {useAuth0} from "@auth0/auth0-react"
import registerGmail from '../Redux/Actions/registerGmail.js';
import { UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes.js';


export default function Home() {
	const {isAuthenticated, user} = useAuth0()
	let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
	let tokenDecoded = decodeToken(token)
	
	const dispatch = useDispatch();
	const events = useSelector((state) => state.showToUser);
	const stateUser = useSelector(state => state.loginState)
	const carrouselEvents = events.filter((ev) => ev.Carrousel);

	//console.log(tokenDecoded)
      
	if(!token) {
		dispatch(registerGmail(user))
	}
	
	useEffect(() => {
		if(!stateUser && token) {
			dispatch({type: UPDATE_STATE_TRUE })
		}
		dispatch(getEvents());
		

		return () => {}
	}, [stateUser]);

	return (
	<div className={styles.container}>
			<div className={styles.navbar}>
		   		<NavBar />
		   </div>
			<div className={styles.items}>
				<div className={styles.welcome}>
						{stateUser || !isExpired(token) ?<p>Welcome {tokenDecoded? tokenDecoded.name: "Guest"}</p>: <p>Welcome Guest</p>}
				</div>
				<div className={styles.carousel}>
					<EventCarousel carrouselEvents={carrouselEvents}/>
				</div>
				<div className={styles.filter}>
				<ButtonFilter />
				</div>
			</div>
			<div className={styles.search}>
			<Search />
			</div>
			
			{/* <CalendarEvents></CalendarEvents> */}
			<div className={styles.totalcards}>
				{events.length ? (
					events.map((event) => (
						<div key={event.ID}>
							<EventCard
								id={event.ID}
								name={event.Name}
								image={event.Image[0]}
								date={event.Date}
								category={event.Category}
								price={event.Price === 0 ? " Free" : event.Price}
								quantity={event.Quantity}
								city={event.City}
								location={event.Location}
							/>
						</div>
					))
				) : (
					<div className={styles.notEvent}>
						<p>No Events Found</p>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
