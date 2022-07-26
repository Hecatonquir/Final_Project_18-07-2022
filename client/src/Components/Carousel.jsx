import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function EventCarousel(obj) {
	const { carrouselEvents } = obj;
	return (
		<Carousel
			style={{
				maxWidth: '100%',
				maxHeight: '450px',
			}}>
			{carrouselEvents.length
				? carrouselEvents.map((ev) => {
						return (
							<Carousel.Item key={ev.ID} interval={2000}>
								<Link to={`/details/id/${ev.ID}`}>
									<img
										className='d-block w-100'
										src={ev.Carrousel}
										alt='Slide'
										style={{
											maxWidth: '100%',
											maxHeight: '350px',
										}}
									/>
								</Link>
							</Carousel.Item>
						);
				  })
				: 'Loading...'}
		</Carousel>
	);
}
