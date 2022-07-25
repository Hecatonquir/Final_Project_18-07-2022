import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img1 from '../Media/event1.png';
import img2 from '../Media/event2.png';
import img3 from '../Media/event3.jpeg';

export default function EventCarousel(obj) {
	const { carrouselEvents } = obj;
	const HardcodedImages = [img1, img2, img3];
	let i = -1;
	return (
		<Carousel
			style={{
				maxWidth: '100%',
				maxHeight: '450px',
			}}>
			{carrouselEvents.map((e) => {
				i++;
				return (
					<Carousel.Item interval={2000}>
						<Link to={`/details/id/${e.ID}`}>
							<img
								className='d-block w-100'
								src={HardcodedImages[i]}
								alt='Carrousel slide'
								style={{
									maxWidth: '100%',
									maxHeight: '350px',
								}}
							/>
						</Link>
					</Carousel.Item>
				);
			})}
			{/* <Carousel.Item interval={2000}>
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
			<Carousel.Item interval={2000}>
				<Link to='/details/id/10b08b1d-17d2-46c1-ba44-2974cbb5b8dc'>
					<img
						className='d-block w-100'
						src={img2}
						alt='Second slide'
						style={{
							maxWidth: '100%',
							maxHeight: '350px',
						}}
					/>
				</Link>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<Link to='/details/id/ea0e8210-c437-4b52-bf86-91753855d926'>
					<img
						className='d-block w-100'
						src={img3}
						alt='Third slide'
						style={{
							maxWidth: '100%',
							maxHeight: '350px',
						}}
					/>
				</Link>
			</Carousel.Item> */}
		</Carousel>
	);
}
