/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addToFavourites } from "../Redux/Actions/addToFav";
import { removeFromFavourites } from "../Redux/Actions/removeFromFav";
import styles from "../Styles/EventCard.module.css";
import fav from "../Media/favorito.png";
import fav2 from "../Media/favorito2.png";
import swal from "sweetalert";
import { Box, Heading, Image, Text, Button, Flex, useMediaQuery } from "@chakra-ui/react";
import AddToCartButton from "./AddToCartButton";
import { decodeToken } from "react-jwt";
import updateFavourite from "../Redux/Actions/updateFavourite";
import getEvents from "../Redux/Actions/getEvents.js";
import calendar from "../Media/calendar.png";
import tickets from "../Media/tickets.png";
import gps from "../Media/gps.png";

export default function EventCard({ id, image, name, price, quantity, city, location, date, category }) {
	const dispatch = useDispatch();
	const Allfavourites = useSelector((state) => state.favourites);
	var exitFav = Allfavourites?.find((e) => e.ID === id);
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
			dispatch(updateFavourite(tokenDecoded.id));
		} else {
			navigate("/login");
		}
	}

	const dateModificada = new Date(date).toLocaleString("en-GB", {
		weekday: "long",
		day: "numeric",
		month: "short",
		year: "numeric",
		hour: "numeric",
		minute: "numeric",
	});

	return (
		<Box>
			<div className={styles.cards}>
				<div className={styles.leftcolumn}>
					<Link to={`/details/id/${id}`}>
						<Image src={image} alt="img eventCard" className={styles.img} />
					</Link>

					{price > 0 && quantity < 1 ? (
						<Box className={styles.triangle} borderTop="100px solid #ee0808">
							<div className={styles.text}>SOLD OUT</div>
						</Box>
					) : price === 0 && quantity === 0 ? (
						<Box className={styles.triangle} borderTop="100px solid #99cc99">
							<div className={styles.text}>FREE!</div>
						</Box>
					) : (
						""
					)}
				</div>

				<div className={styles.rightcolumn}>
					<Link to={`/details/id/${id}`}>
						<h5 className={styles.title}>{name}</h5>
					</Link>
					<Text className={styles.data}>
						<img src={calendar} alt="calendar" style={{ width: "1.5rem", height: "1.5rem", marginRight: "1rem" }} />
						{dateModificada}
					</Text>
					<Text className={styles.datas}>
						<img src={tickets} alt="tickets" style={{ width: "1.5rem", height: "1.5rem", marginRight: "1rem" }} /> $
						{price === 0 ? " Free!" : ` ${price}`}
					</Text>
					<Text className={styles.datas}>
						<img
							src={gps}
							alt="gps"
							style={{ width: "2rem", height: "1.5rem", marginRight: "1rem", marginLeft: "-0.5rem" }}
						/>
						{city}
					</Text>

					<Flex alignItems="center" className={styles.flex}>
						<Button className={styles.ButtonFav} bg="white">
							{exitFav ? (
								<img src={fav2} alt="not imgfav" className={styles.favicon} onClick={() => handleClickFav()} />
							) : (
								<img src={fav} alt="not imgfav" className={styles.favicon} onClick={() => handleClickFav()} />
							)}
						</Button>
						<AddToCartButton id={id} className={styles.Button2} quantity={quantity} price={price} />
					</Flex>
				</div>
			</div>
		</Box>
	);
}
