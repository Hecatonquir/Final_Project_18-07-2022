import { React, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../Redux/Actions/getDetails';
import { addCart } from '../Redux/Actions/addToCart';
import Loader from './Loader.jsx';
import DetailCarousel from './DetailCarousel';
import { Box, Button, Flex, Heading, Stack, Text, Center } from '@chakra-ui/react';
// import '../Styles/Detail.module.css';
import Nav from './Nav.jsx'

export default function Detail() {
	const { id } = useParams();
	const dispatch = useDispatch();
	var event = useSelector((state) => state.eventDetail);

	useEffect(() => {
		dispatch(getDetail(id));
	}, [dispatch, id]);

	function hundleClick() {
		dispatch(addCart(id));
		alert('added product');
	}

	// return (
	// 	<div>
	// 		{event[0] ? (
	// 			<div>
	// 				<nav className={styles.nav}>
	// 					<Link to='/'>
	// 						<button className={styles.Button}>Back</button>
	// 					</Link>
	// 				</nav>
	// 				<div className={styles.container}>
	// 					<div className={styles.data}>
	// 						{event[0].Image.map((im) => {
	// 							if (im !== '') return <img src={im} alt={event[0].Name} className={styles.img1} />;
	// 							else return '';
	// 						})}
	// 					</div>
	// 					<div className={styles.data2}>
	// 						<h1>{event[0].Name}</h1>
	// 						<p>City: {event[0].City}</p>
	// 						<p>Location: {event[0].Location}</p>
	// 						<p>Tickets Available: {event[0].Quantity}</p>
	// 						<p>Category: {event[0].Category.join(' / ')}</p>
	// 						<p>Rating: {event[0].Rating}</p>
	// 						<p>AgeRestriction: {event[0].AgeRestriction}</p>
	// 						<p>Restrictions: {event[0].Restrictions.join(' / ')}</p>
	// 						<p>Price: ${event[0].Price}</p>
	// 						<p>Date: {event[0].Date}</p>

	// 						<p>Detail: {event[0].Detail}</p>
	// 						<button className={styles.Button2} onClick={() => hundleClick()}>
	// 							Add To Cart
	// 						</button>
	// 					</div>
	// 				</div>
	// 			</div>
	// 		) : (
	// 			<div>
	// 				<Link to='/'>
	// 					<button className={styles.Button}>Back</button>
	// 				</Link>
	// 				<Loader />
	// 			</div>
	// 		)}
	// 	</div>
	// );



// return (
// 		<div>
// 			{event[0] ? (
// 				<div>
// 					<nav>
// 						<Link to='/'>
// 							<button>Back</button>
// 						</Link>
// 					</nav>
// 					<div>
// 						<div>
// 							{event[0].Image.map((im) => {
// 								if (im !== '') return <img src={im} alt={event[0].Name} />;
// 								else return '';
// 							})}
// 						</div>
// 						<div>
// 							<h1>{event[0].Name}</h1>
// 							<p>City: {event[0].City}</p>
// 							<p>Location: {event[0].Location}</p>
// 							<p>Tickets Available: {event[0].Quantity}</p>
// 							<p>Category: {event[0].Category.join(' / ')}</p>
// 							<p>Rating: {event[0].Rating}</p>
// 							<p>AgeRestriction: {event[0].AgeRestriction}</p>
// 							<p>Restrictions: {event[0].Restrictions.join(' / ')}</p>
// 							<p>Price: ${event[0].Price}</p>
// 							<p>Date: {event[0].Date}</p>

// 							<p>Detail: {event[0].Detail}</p>
// 							<button onClick={() => hundleClick()}>
// 								Add To Cart
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			) : (
// 				<div>
// 					<Link to='/'>
// 						<button>Back</button>
// 					</Link>
// 					<Loader />
// 				</div>
// 			)}
// 		</div>
// 	);


return (
	<Box bgGradient='linear(to-r, #1c2333, #371a1e)'>
		{event[0] ? (
			<Box>
				<Nav />
				<Flex justifyContent='center' alignItems='center' height='100vh'>
				<Box maxW='90%' bg="#b1b7b76a" border='1px solid #88cfd938' p={6}  boxShadow=" 10px 10px 20px #2c2b2b, -10px -10px 20px #5c5a5a;" borderRadius='20px'>
					<Flex alignItems='center'>
					<Box marginRight={4}>
						<DetailCarousel />
					</Box>
					<Box marginTop={4} textAlign='center'>
						<Stack spacing={3}>
						<Heading as='h1'>{event[0].Name}</Heading>
						<Text>City: {event[0].City}</Text>
						<Text>Location: {event[0].Location}</Text>
						<Text>Tickets Available: {event[0].Quantity}</Text>
						<Text>Category: {event[0].Category.join(' / ')}</Text>
						<Text>Rating: {event[0].Rating}</Text>
						<Text>AgeRestriction: {event[0].AgeRestriction}</Text>
						<Text>Restrictions: {event[0].Restrictions.join(' / ')}</Text>
						<Text>Price: ${event[0].Price}</Text>
						<Text>Date: {event[0].Date}</Text>
						<Text>Detail: {event[0].Detail}</Text>
						</Stack>
						<Center>
						<Button onClick={() => hundleClick()} marginTop={6} bg='#f4a69a'>
							Add To Cart
						</Button>
						</Center>
					</Box>
					</Flex>
				</Box>
				</Flex>
			</Box>
		) : (
			<div>
				<Link to='/'>
					<Button margin={2}  bg='#1a78b1'>Back</Button>
				</Link>
				<Loader />
			</div>
		)}
	</Box>
);


}

