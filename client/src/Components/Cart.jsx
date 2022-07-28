import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../Redux/Actions/clearCart';
import CardItem from './CartItem';
import styles from '../Styles/Cart.module.css';
import imgcarrito from '../Media/emptycart.png';

import Nav from './Nav';
import { Box, Button, Center, Heading, Text, Image } from '@chakra-ui/react';
import { decodeToken } from 'react-jwt';
import { updateCart } from '../Redux/Actions/updateCart';

export default function Cart() {
	let token= document.cookie.split(";").filter(el => el.includes("access-token")).toString().split("=")[1];
	let tokenDecoded = decodeToken(token);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	var totalAmount = 0;
	const [showItem, setShowItem] = useState(false);

	for (let i = 0; i < cart.length; i++) {
		totalAmount = totalAmount + cart[i].Price * cart[i].PurchasedItem;
	}

	function hundleClick() {
		dispatch(clearCart());
		dispatch(updateCart(tokenDecoded.id))
	}

	return (
		<Box bgGradient='linear(to-r, #1c2333, #371a1e)' minHeight='100vh'>
			<Nav />
			<Heading as='h4' margin={6} color='white'>
				SHOPPING CART
			</Heading>
			<Text margin={6} color='white'>
				Your selected events
			</Text>
			<Box className={styles.container}>
				<Box>
					{cart.length ? (
						cart.map((item) => (
							<Box key={item.ID}>
								<CardItem
									id={item.ID}
									name={item.Name}
									image={item.Image[0]}
									price={item.Price}
									purchasedItem={item.PurchasedItem}
								/>
							</Box>
						))
					) : (
						<Box>
							<Image className={styles.imgcarrito} src={imgcarrito} alt='not imgcarrito' />
						</Box>
					)}
				</Box>

				<Box className={styles.containeramount}>
					<Heading as='h4' color='white'>
						Total Price: ${totalAmount}
					</Heading>
					<Box>
						{showItem ? (
							<br /> //  ACA LE PASO INFO A ESTE COMPONENTE
						) : (
							<Button
								className={styles.Button2}
								onClick={() => {
									setShowItem(true);
								}}>
								Buy
							</Button>
						)}
					</Box>
				</Box>
			</Box>
			<Box margin={6}>
				<Button className={styles.Button2} onClick={() => hundleClick()}>
					Remove
				</Button>
			</Box>
		</Box>
	);
}
