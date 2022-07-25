import { React, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../Redux/Actions/getDetails';
import { addCart } from '../Redux/Actions/addToCart';
import Loader from './Loader.jsx';
import styles from '../Styles/Detail.module.css';
import { clearDetail } from '../Redux/Actions/clearDetail';
import AddToCartButton from './AddToCartButton';

export default function Detail() {
	const { id } = useParams();
	const dispatch = useDispatch();
	var event = useSelector((state) => state.eventDetail);
	useEffect(() => {
		dispatch(getDetail(id));
		return ()=> dispatch(clearDetail())
	}, [dispatch, id]);
	let i = 0;

	return (
		<div>
			{event[0] ? (
				<div>
					<nav className={styles.nav}>
						<Link to='/'>
							<button className={styles.Button}>Back</button>
						</Link>
					</nav>
					<div className={styles.container}>
						<div className={styles.data}>
							{event[0].Image.map((im) => {
								i++;
								if (im !== '')
									return <img key={i} src={im} alt={event[0].Name} className={styles.img1} />;
								else return '';
							})}
						</div>
						<div className={styles.data2}>
							<h1>{event[0].Name}</h1>
							<p>City: {event[0].City}</p>
							<p>Location: {event[0].Location}</p>
							<p>Tickets Available: {event[0].Quantity === 0 ? "Event does not require tickets" : event[0].Quantity }</p>
							<p>Category: {event[0].Category.join(' / ')}</p>
							{/* <p>Rating: {event[0].Rating}</p> */}
							<p>AgeRestriction: {event[0].AgeRestriction === 0 ? " Suitable for all ages" : event[0].AgeRestriction }</p>
							<p>Restrictions: {!event[0].Restrictions.length === 0 ? event[0].Restrictions.join(' / ') : "Unrestricted Event"}</p>
							<p>Price: ${!event[0].Price === 0 ? event[0].price : " Free" }</p>
							<p>Date: {event[0].Date}</p>

							<p>Detail: {event[0].Detail}</p>
							<AddToCartButton id={id}/>
						</div>
					</div>
				</div>
			) : (
				<div>
					<Link to='/'>
						<button className={styles.Button}>Back</button>
					</Link>
					<Loader />
				</div>
			)}
		</div>
	);
}
