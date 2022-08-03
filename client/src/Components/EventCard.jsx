/* eslint-disable no-unused-vars */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToFavourites } from "../Redux/Actions/addToFav";
import { removeFromFavourites } from "../Redux/Actions/removeFromFav";
import styles from "../Styles/EventCard.module.css";
import fav from "../Media/favorito.png";
import fav2 from "../Media/favorito2.png";
import swal from "sweetalert";
import { Box, Heading, Image, Text, Button, Flex } from "@chakra-ui/react";
import AddToCartButton from "./AddToCartButton";
import { decodeToken } from "react-jwt";

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
  let token = document.cookie.split(";")[0];
  let token1 = token.split("=")[1];
  let tokenDecoded = decodeToken(token);
  const navigate = useNavigate();

  function handleClickFav() {
    if (token1) {
      if (!exitFav) {
        dispatch(addToFavourites(id));
        swal("Added to favorite", { icon: "success" });
      } else {
        dispatch(removeFromFavourites(id));
        swal("Removed from favorites", { icon: "warning" });
      }
    } else {
      navigate("/login");
    }
  }

  const dateModificada = new Date(date).toLocaleString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  return (
	<Box>
		<div className={styles.cards}>
			<div className={styles.leftcolumn}>
				<Link to={`/details/id/${id}`}>
					<Image src={image} alt='img eventCard' width='20rem' height='20rem' />
				</Link>

				{price > 0 && quantity < 1 ? (
					<Box className={styles.triangle} borderTop='100px solid #ee0808'>
						<div className={styles.text}>SOLD OUT</div>
					</Box>
				) : price === 0 && quantity === 0 ? (
					<Box className={styles.triangle} borderTop='100px solid #99cc99'>
						<div className={styles.text}>FREE!</div>
					</Box>
				) : (
					''
				)}
			</div>

			<div className={styles.rightcolumn}>
				<Link to={`/details/id/${id}`}>
					<Heading as='h5' fontSize='1.5em' marginTop={4} _hover={{ color: '#FD7014' }}>
						{name}
					</Heading>
				</Link>
				<Text marginTop={2}> 🗓️{dateModificada} </Text>
				{/* get() { // MODIFICAR EL FORMATO DE LA FECHA, NO MODIFICAR EN LA DB PORQUE SE ROMPE, MODIFICAR EN FRONT
				return this.getDataValue('Date').toLocaleString('en-GB', {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
				});
			}, */}

			<Text marginTop={2}>🎟️ ${price === 0 ? ' Free!' : price}</Text>
				{/* <Text marginTop={2}>Category: {category}</Text> */}
				<Text marginTop={2}> 📍{city}</Text>
				{/* <Text marginTop={2}>Place: {location}</Text> */}

				<Flex alignItems='center' marginBottom={2}>
					<Button className={styles.ButtonFav} bg='white'>
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
					<AddToCartButton
						id={id}
						className={styles.Button2}
						quantity={quantity}
						price={price}
					/>
				
				</Flex>

			</div>
		</div>
	</Box>
);
}
