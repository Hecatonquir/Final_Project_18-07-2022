import { React, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../Redux/Actions/getDetails';
import { addCart } from '../Redux/Actions/addToCart';
import Loader from './Loader.jsx';
import styles from '../Styles/Detail.module.css';
import { clearDetail } from '../Redux/Actions/clearDetail';
import AddToCartButton from './AddToCartButton';
import { Container } from 'react-bootstrap';

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
		<div className={styles.body}>
			{event[0] ? (
				<div>
					<nav className={styles.nav}>
						<Link to='/'>
							<button className={styles.Button}>Back</button>
						</Link>
					</nav>
					<div className={styles.cards}>
						<div className={styles.leftcolumn}>
							{/* {event[0].Image.map((im) => {
								i++;
								if (im !== '')
									return <img key={i} src={im} alt={event[0].Name} className={styles.img1} />;
								else return '';
							})} */}
							<img src={event[0].Image[0]} alt={event[0].Image} className={styles.img1} />
						</div>
						<div className={styles.rightcolumn}>
							<div>
								<h2>{event[0].Name}</h2>
								<h6>Category: {event[0].Category.join(' / ')}</h6>
							</div>
							<div className={styles.subtitles}>
								<p>City: {event[0].City}</p>
								<p>Location: {event[0].Location}</p>
								<p>Tickets Available: {event[0].Quantity === 0 ? "Event does not require tickets" : event[0].Quantity }</p>
								{/* <p>Rating: {event[0].Rating}</p> */}
								<p>AgeRestriction: {event[0].AgeRestriction === 0 ? " Suitable for all ages" : event[0].AgeRestriction }</p>
								<p>Restrictions: {!event[0].Restrictions.length === 0 ? event[0].Restrictions.join(' / ') : "Unrestricted Event"}</p>
								<p>Price: ${event[0].Price === 0 ? " Free" : event[0].Price }</p>
								<p>Date: {event[0].Date}</p>
								<p>Detail: {event[0].Detail}</p>
							</div>
							<AddToCartButton id={id} className={styles.Button2}/>
						</div>
					</div>
					<h6 className={styles.textpictures}>Additional Pictures: </h6>
					<div className={styles.containerimg}>
					{event[0].Image[1] ? <img src={event[0].Image[1]} alt={event[0].Image} className={styles.img2}/> : <div></div>}
					{event[0].Image[2] ? <img src={event[0].Image[2]} alt={event[0].Image} className={styles.img2}/> : <div></div>}
					{event[0].Image[3] ? <img src={event[0].Image[3]} alt={event[0].Image} className={styles.img2}/> : <div></div>}
					</div>
				</div>
			) : (
				<div>
					<nav className={styles.nav}>
						<Link to='/'>
							<button className={styles.Button}>Back</button>
						</Link>
					</nav>
					<Loader />
				</div>
			)}
		</div>
	);
}
