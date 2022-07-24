import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../Redux/Actions/addToCart';
import styles from '../Styles/EventCard.module.css';

export default function EventCard({ id, image, name, price, quantity, city, location, date, category }) {
	const dispatch = useDispatch()
	function handleClick() {
		dispatch(addCart(id));
		alert('added product');
	}
	return (
		<div className={styles.cardContainer}>
			<Link to={`/details/id/${id}`}>
				<img className={styles.img} src={image} alt='img eventCard' />
				<h4>{name}</h4>
			</Link>
				<p>Date: {date} </p>
				<p>Price: ${price}</p>
				<p>Category: {category}</p>
				<p>City: {city}</p>
				<p>Place: {location}</p>
				<button className={styles.Button2} onClick={() => handleClick()}>Add To Cart</button>
		</div>
	);
}
