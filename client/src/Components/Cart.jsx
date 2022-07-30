import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../Redux/Actions/clearCart';
import CardItem from './CartItem';
import styles from '../Styles/Cart.module.css';
import imgcarrito from '../Media/emptycart.png';
import Nav from './Nav';
import { Box, Button, Center, Heading, Text, Image } from '@chakra-ui/react';
import { decodeToken } from 'react-jwt';
import { updateCart } from '../Redux/Actions/updateCart';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Cart() {
	let token = document.cookie
		.split(';')
		.filter((el) => el.includes('access-token'))
		.toString()
		.split('=')[1];
	let tokenDecoded = decodeToken(token);
	const dispatch = useDispatch();
	const cart = useSelector((state) => state.cart);
	var totalAmount = 0;
	const [showItem, setShowItem] = useState(false);
	const stripeKey =
		'pk_test_51LOdlpIX9UMpYaskAq0EOuQYBwCNO0CWWVUIouFgSt4FP4eNMznvWxSTuflGp35HmZKZidvlVZOCYNrlyvviDVrc00V1E8tivg';

	for (let i = 0; i < cart.length; i++) {
		totalAmount = totalAmount + cart[i].Price * cart[i].PurchasedItem;
	}

	function hundleClick() {
		dispatch(clearCart());
		dispatch(updateCart(tokenDecoded.id));
	}

	async function handleToken(token) {
		const response = await axios.post('/checkout', { token, totalAmount });
		const { status } = response.data;
		if (status === 'success') {
			toast.success('Your purchase was successful! Check your E-mail for more information');
			/* dispatch(removeQuantityFromEvent(X)) <---------- ACA Se despacha al back para restar numeros al valor de Quantity de cada evento. (hacer 1 para cada evento)  */
			dispatch(clearCart());
		} else {
			toast.error('Something went wrong. Purchase cancelled');
		}
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
									image={item.Image[0]}
									name={item.Name}
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
			</Box>
			<Box className={styles.containeramount}>
				<Heading as='h4' color='white'>
					Total Price: ${totalAmount} ARS
				</Heading>
				{/* <Button
							className={styles.Button2}
							onClick={() => {
								setShowItem(true);
							}}>
							Buy
						</Button> */}
				<Box>
					{showItem ? (
						<h6>Loading...</h6>
					) : (
						<StripeCheckout
							stripeKey={stripeKey}
							token={handleToken}
							amount={totalAmount * 100}
							/* el *100 es para convertirlo a centavos, NO para estafar a la gente */
							name='Entradas Para los Eventos!'
						/>
					)}
					<ToastContainer />
				</Box>
			</Box>
			<br />
			<Box margin={6}>
				<Button bg='pink' onClick={() => hundleClick()}>
					Clear Cart
				</Button>
			</Box>
			<br />
		</Box>
	);
}
