import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getEvents from '../Redux/Actions/getEvents.js';
import ButtonFilter from './ButtonFilter.jsx';
import EventCard from './EventCard.jsx';
import NavBar from './NavBar.jsx';
import Search from './Search.jsx';
import EventCarousel from './Carousel.jsx';
import Loader from './Loader.jsx';
import CalendarEvents from './Calendar.jsx';
import styles from '../Styles/Home.module.css';
import Footer from './Footer.jsx';
import {decodeToken, isExpired} from "react-jwt"
export default function Home() {
	let token= document.cookie.split("=")[1]
	let tokenDecoded = decodeToken(token)

	console.log(tokenDecoded, isExpired(token))
	const dispatch = useDispatch();
	const events = useSelector((state) => state.showToUser);
	useEffect(() => {
		dispatch(getEvents());
	}, []);
	return (
		<div>
			<div className={styles.items}>
			<NavBar />
			<div className={styles.carousel}>
				<div>
					{<p>Welcome {tokenDecoded? tokenDecoded.name: "Guest"}</p>}
				</div>
			<EventCarousel />
			</div>
			<Search />
			</div>
			<ButtonFilter />
			<CalendarEvents></CalendarEvents>
			<div className={styles.cards}>
				{events.length ? (
					events.map((event) => (
						<div key={event.ID} className={styles.card}>
							<EventCard
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
						</div>
					))
				) : (
					<div>
						<h2>No Events Found</h2>
					</div>
				)}
			</div>
			<Footer />
		</div>
	);
}
