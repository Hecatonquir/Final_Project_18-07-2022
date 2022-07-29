import { React, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getDetail } from '../Redux/Actions/getDetails';
import Loader from './Loader.jsx';
import fav from '../Media/favorito.png'
import styles from '../Styles/Detail.module.css';
import { clearDetail } from '../Redux/Actions/clearDetail';
import AddToCartButton from './AddToCartButton';
import { addToFavourites } from '../Redux/Actions/addToFav';
import { Box, Button, Flex, Heading, Stack, Text } from '@chakra-ui/react';
import Nav from './Nav.jsx'
import DetailCarousel from './DetailCarousel';
import swal from 'sweetalert';


export default function Detail() {
	const { id } = useParams();
	const dispatch = useDispatch();
	var event = useSelector((state) => state.eventDetail);
	useEffect(() => {
		dispatch(getDetail(id));
		return ()=> dispatch(clearDetail())
	}, [dispatch, id]);

	function handleClickFav(id) {
		dispatch(addToFavourites(id))
		swal('Added to favorite',{icon:"success"});
	}

	return (
		<Box bgGradient='linear(to-r, #1c2333, #371a1e)'>
			{event[0] ? (
				<Box>
					<Nav />
					<Flex justifyContent='center' alignItems='center' height='100vh'>
						<Box maxW='100%' bg="#b1b7b76a" border='1px solid #88cfd938' p={2}  boxShadow=" 5px 5px 10px #2c2b2b, -10px -10px 20px #5c5a5a;" borderRadius='20px'>
							<div className={styles.cards}>
							<div className={styles.leftcolumn}>
							<Flex alignItems='center'>
							<Box marginRight={4} >
								<DetailCarousel />
							</Box>
							</Flex>
							</div>
							<div className={styles.rightcolumn}>
							<Box marginTop={3} textAlign='start'>
								<Stack spacing={3}>
									<Heading as='h1'>{event[0].Name}</Heading>
									<Text>City: {event[0].City}</Text>
									<Text>Location: {event[0].Location}</Text>
									<Text>Tickets Available: {event[0].Quantity === 0 ? "Event does not require tickets" : event[0].Quantity}</Text>
									<Text>Category: {event[0].Category}</Text>
									{/* <Text>Rating: {event[0].Rating}</Text> */}
									<Text>AgeRestriction: +{event[0].AgeRestriction != 0 ? event[0].AgeRestriction : " Suitable for all ages"}</Text>
									<Text>Restrictions: {event[0].Restrictions.length > 0 ? "Unrestricted Event" : event[0].Restrictions.join(' - ')}</Text>
									<Text>Price: ${event[0].Price === 0 ? " Free" : event[0].Price}</Text>
									<Text>Date: {event[0].Date}</Text>
									<Text>Detail: {event[0].Detail}</Text>
								</Stack>
								<div className={styles.containerButton}>
								<Button className={styles.ButtonFav} backgroundColor='white'>
									<img src={fav} alt='not imgfav' className={styles.favicon} onClick={() => handleClickFav(event[0].ID)}/>
								</Button>
								<AddToCartButton id={id} />
								</div>

							</Box>
							</div>
							</div>
						</Box>
					</Flex>
					
				</Box>
			) : (
				<Box>
					<nav className={styles.nav}>
						<Link to='/'>
							<Button margin={2}  bg='#1a78b1'>Back</Button>
						</Link>
					</nav>
					<Loader />
				</Box>
			)}
		</Box>
	);
}

