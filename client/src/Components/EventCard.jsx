import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../Redux/Actions/addToCart';
import styles from '../Styles/EventCard.module.css';
import carticon from '../Media/carri.png'
import swal from 'sweetalert';
export default function EventCard({ id, image, name, price, quantity, city, location, date, category }) {
	const dispatch = useDispatch()
	function handleClick() {
		dispatch(addCart(id));
		swal('added product',{icon:"success"});
	}
	return (
		<div>
			<div className={styles.cards}>
			<Link to={`/details/id/${id}`} className={styles.link}>
			<div className={styles.leftcolumn}>
				<img className={styles.img} src={image} alt='img eventCard' />
			</div>
			</Link>
			<div className={styles.rightcolumn}>
				<Link to={`/details/id/${id}`} className={styles.link}>
				<div>
					<h4>{name}</h4>
					<h6>Category: {category}</h6>
				</div>
				</Link>
				<div className={styles.subtitles}>
					<p>Date: {date} </p>
					<p>Price: ${price}</p>
					<p>City: {city}</p>
					<p>Place: {location}</p>
				</div>
				<button className={styles.Button2} onClick={() => handleClick()}>
					Add To<img src={carticon} alt='not imgcart' className={styles.carticon}/>
					</button>
			</div>
			</div>
		</div>
	);
}
