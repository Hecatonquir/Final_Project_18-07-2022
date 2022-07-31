import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFavourites } from '../Redux/Actions/addToFav';
import { removeFromFavourites } from '../Redux/Actions/removeFromFav';
import styles from '../Styles/EventCard.module.css';
import fav from '../Media/favorito.png';
import fav2 from '../Media/favorito2.png';
import swal from 'sweetalert';
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react';
import AddToCartButton from './AddToCartButton';
import { decodeToken } from 'react-jwt';

export default function EventCard({
	id,
	image,
	name,
	price,
	quantity,
	city,
	location,
	date,
	category,
}) {
	const dispatch = useDispatch();
	const Allfavourites = useSelector((state) => state.favourites);
	var exitFav = Allfavourites.find((e) => e.ID === id);
	let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1]
	let tokenDecoded = decodeToken(token)
	const navigate = useNavigate()

	function handleClickFav() {
		if(token){
		if (!exitFav) {
				dispatch(addToFavourites(id));
				swal('Added to favorite', { icon: 'success' });
			} else {
				dispatch(removeFromFavourites(id));
				swal('Removed from favorites', { icon: 'warning' });
			}
		} else {
			navigate('/login')
		}
	}

	return (
		<Box>
			<div className={styles.cards}>
				<div className={styles.leftcolumn}>
					<Link to={`/details/id/${id}`}>
						<Image src={image} alt='img eventCard' width='20rem' height='20rem' />
					</Link>
				</div>
				<div className={styles.rightcolumn}>
					<Link to={`/details/id/${id}`}>
						<Heading as='h5' fontSize='1.5em' marginTop={4}>
							{name}
						</Heading>
					</Link>
					<Text marginTop={2}>Date: {date} </Text>
					<Text marginTop={2}>Price: ${price}</Text>
					<Text marginTop={2}>Category: {category}</Text>
					<Text marginTop={2}>City: {city}</Text>
					<Text marginTop={2}>Place: {location}</Text>
					<div className={styles.containerButton}>
						<Button className={styles.ButtonFav} backgroundColor='white'>
							{exitFav ? (
								<img
									src={fav2}
									alt='not imgfav'
									className={styles.favicon}
									onClick={() => handleClickFav()}
								/>
							) : (
								<img
									src={fav}
									alt='not imgfav'
									className={styles.favicon}
									onClick={() => handleClickFav()}
								/>
							)}
						</Button>
						<AddToCartButton id={id} className={styles.Button2} />
					</div>
				</div>
			</div>
		</Box>
	);
}
