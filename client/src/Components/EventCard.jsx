import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../Styles/EventCard.module.css';

export default function EventCard({ id, image, name, price, quantity, city, location, date }) {
	return (
		<div>
			<Link to={`/details/id/${id}`}>
				<img className={styles.img} src={image} alt='img eventCard' />
				<h4>{name}</h4>
			</Link>
			<p>Date: {date} </p>
			<p>Price: ${price}</p>
			<p>City: {city}</p>
			<p>Place: {location}</p>
		</div>
	);
}
