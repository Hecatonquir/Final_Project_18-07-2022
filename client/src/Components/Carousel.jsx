import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../Media/event1.png';
import img2 from '../Media/event2.png';
import img3 from '../Media/event3.jpeg';

export default function EventCarousel() {
	return (
		<Carousel
			style={{
				maxWidth: '100%',
				maxHeight: '450px',
			}}>
			{algo
				? algo.map((ev) => {
						return (
							<Carousel.Item interval={2000}>
								<Link to='/details/id/c5b9200d-f0db-4ea8-9499-d559fc13c4ea'>
									<img
										className='d-block w-100'
										src={img1}
										alt='First slide'
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
