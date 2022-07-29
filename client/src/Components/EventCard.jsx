import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addCart } from '../Redux/Actions/addToCart';
import { addToFavourites } from '../Redux/Actions/addToFav';
import styles from '../Styles/EventCard.module.css';
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
		<Box >
			<div className={styles.cards}>
				<div className={styles.leftcolumn}>
					<Link to={`/details/id/${id}`}>
						<Image src={image} alt='img eventCard' width='20rem' height='20rem'/>
					</Link>
				</div>
				<div className={styles.rightcolumn}>
					<Heading as='h5' fontSize='1.5em' marginTop={4}>{name}</Heading>
					<Text marginTop={2}>Date: {date} </Text>
					<Text marginTop={2}>Price: ${price}</Text>
					<Text marginTop={2}>Category: {category}</Text>
					<Text marginTop={2}>City: {city}</Text>
					<Text marginTop={2}>Place: {location}</Text>
					<div className={styles.containerButton}>
			
						<Button className={styles.ButtonFav} backgroundColor='white'>
							<img src={fav} alt='not imgfav' className={styles.favicon} onClick={() => handleClickFav()}/>
						</Button>
						<AddToCartButton id={id} className={styles.Button2}/>
					</div>
				</div>
			</div>
		</Box>
	);
}
