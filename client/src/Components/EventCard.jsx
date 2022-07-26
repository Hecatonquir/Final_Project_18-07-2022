import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../Redux/Actions/addToCart';
import styles from '../Styles/EventCard.module.css';
import carticon from '../Media/carri.png'
import swal from 'sweetalert';
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";


export default function EventCard({ id, image, name, price, quantity, city, location, date, category }) {
	const dispatch = useDispatch()
	function handleClick() {
		dispatch(addCart(id));
		swal('added product',{icon:"success"});
	}

	return (
		<Box>
			<Link to={`/details/id/${id}`}>
 				<Image src={image} alt='img eventCard' width='500px' height='300px'/>
				<Heading as='h4' fontSize='2em' marginTop={4}>{name}</Heading>
			</Link>
			<Text marginTop={2}>Date: {date} </Text>
			<Text marginTop={2}>Price: ${price}</Text>
			<Text marginTop={2}>Category: {category}</Text>
			<Text marginTop={2}>City: {city}</Text>
			<Text marginTop={2}>Place: {location}</Text>

			<Button className={styles.Button2} onClick={() => handleClick()}>
				Add To
				<img src={carticon} alt='not imgcart' className={styles.carticon}/>
			</Button>
		</Box>
	);
}
