import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../Styles/Home.module.css';

export default function EventCarousel(obj) {
	const { carrouselEvents } = obj;
	//console.log('🟢 Carousel.jsx ~ line 8 ~ carrouselEvents', carrouselEvents);

	return (
		<Carousel className={styles.carousel}>
			{carrouselEvents
				? carrouselEvents.length
					? carrouselEvents
							.filter((el) => !el.isErased)
							.map((ev) => {
								return (
									<Carousel.Item key={ev.ID} interval={2000}>
										<Link to={`/details/id/${ev.ID}`}>
											<img
												className='d-block w-100'
												src={ev.Carrousel}
												alt={ev.Name}
												style={{
													maxWidth: '100%',
													maxHeight: '350px',
												}}
											/>
										</Link>
									</Carousel.Item>
								);
							})
					: 'Loading...'
				: 'Fallo en el carrousel'}
		</Carousel>
	);
}
