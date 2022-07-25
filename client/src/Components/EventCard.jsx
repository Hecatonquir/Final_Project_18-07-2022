import React from 'react';
import { Link } from 'react-router-dom';
// import styles from '../Styles/EventCard.module.css';
import { Box, Heading, Image, Text } from "@chakra-ui/react";

export default function EventCard({ id, image, name, price, quantity, city, location, date, category }) {
	// return (
	// 	<div>
	// 		<Link to={`/details/id/${id}`}>
	// 			<img className={styles.img} src={image} alt='img eventCard' />
	// 			<h4>{name}</h4>
	// 		</Link>
	// 		<p>Date: {date} </p>
	// 		<p>Price: ${price}</p>
	// 		<p>Category: {category}</p>
	// 		<p>City: {city}</p>
	// 		<p>Place: {location}</p>
	// 	</div>
	// );


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
		</Box>
	)
}
