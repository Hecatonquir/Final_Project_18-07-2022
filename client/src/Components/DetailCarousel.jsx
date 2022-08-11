import { React, useEffect } from "react";
import { Carousel } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../Redux/Actions/getDetails";
import { Box, useMediaQuery } from "@chakra-ui/react";
import style from "../Styles/DetailCarousel.module.css";

export default function EventCarousel() {
	const { id } = useParams();
	const dispatch = useDispatch();
	var event = useSelector((state) => state.eventDetail);

	// const styles = {
	// 	prueba: {
	// 		width: '45vw',
	// 		height: '85vh',
	// 		borderRadius: '1rem',
	// 	},
	// };

	useEffect(() => {
		dispatch(getDetail(id));
	}, [dispatch, id]);

	let quantity = event.length ? event[0].Quantity : 0;
	let price = event.length ? event[0].Price : 0;

		//Responsive
		const [smallScreen] = useMediaQuery('(max-width: 425px)');

	const CarouselItem = event[0].Image.map((im, i) => {
		if (im !== "")
			return (
				<Carousel.Item interval={2000} key={i} className={style.carousel}>
					<img src={im} alt={event[0].Name} className={style.img} />
					{price > 0 && quantity < 1 ? (
						<Box className={style.triangle} borderTop={!smallScreen ? "200px solid #ee0808" : "150px solid #ee0808"}> 
							<div className={style.text}>SOLD OUT</div>
						</Box>
					) : price === 0 && quantity === 0 ? (
						<Box className={style.triangle} borderTop={!smallScreen ? "200px solid #99cc99" : "150px solid #99cc99"}>
							<div className={style.text1}>FREE!</div>
						</Box>
					) : (
						""
					)}
				</Carousel.Item>
			);
		else return "";
	});

	return <Carousel className={style.contentCarousel}>{CarouselItem}</Carousel>;
}
