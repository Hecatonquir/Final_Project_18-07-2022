import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../Redux/Actions/addToCart';
import { addToFavourites } from '../Redux/Actions/addToFav';
import styles from '../Styles/EventCard.module.css';
import carticon from '../Media/carri.png'
import fav from '../Media/favorito.png'
import swal from 'sweetalert';
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import AddToCartButton from './AddToCartButton';


export default function EventCard({ id, image, name, price, quantity, city, location, date, category }) {
	const dispatch = useDispatch()
	function handleClick() {
		dispatch(addCart(id));
		swal('Added product',{icon:"success"});
	}
	function handleClickFav() {
		dispatch(addToFavourites(id));
		swal('Added to favorite',{icon:"success"});
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
			<div className={styles.containerButton}>
				<Button className={styles.ButtonFav} >
					<img src={fav} alt='not imgfav' className={styles.favicon} onClick={() => handleClickFav()}/>
				</Button>
				{/* <Button className={styles.Button2} onClick={() => handleClick()}>
					Add To
					<img src={carticon} alt='not imgcart' className={styles.carticon}/>
				</Button> */}
				{/* pero te modularice el botoncito para que lo uses asi :c */}
				<AddToCartButton id={id} className={styles.Button2}/>
			</div>
		</Box>
	);
}
