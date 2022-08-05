import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../Redux/Actions/addToCart';
import styles from '../Styles/Detail.module.css';
import carticon from '../Media/carri2.png';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import { updateCart } from '../Redux/Actions/updateCart';
import { Box, Button } from '@chakra-ui/react';

function AddToCartButton({ id, quantity, price }) {
	let token = document.cookie.split(';')[0];
	let token1 = token.split('=')[1];
	let tokenDecoded = decodeToken(token1);
	const dispatch = useDispatch();
	const { cart } = useSelector((s) => s);
	const navigate = useNavigate();
	function handleClick() {
		if (token) {
			dispatch(addCart(id));
			dispatch(updateCart(tokenDecoded.id));
			

			swal('added product', ' ', 'success');
		} else {
			navigate('/login');
		}
	}
	return (
		<>
			{price === 0 && quantity === 0 ? (
				<Button
					style={{
						width: '100px',
						backgroundColor: '#08D9D6',
						borderRadius: '5px',
						fontWeight: 'bolder',
						fontSize: '12px',
						color: 'white',
						height: '2.3rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin:'3%'
					}}
					disabled={true}>
					FREE!
				</Button>
			) : price !== 0 && quantity !== 0 ? (
				<button className={styles.ButtonAdd2} onClick={() => handleClick()}>
					Add To <img src={carticon} alt='not imgcart' className={styles.carticon} />
				</button>
			) : (
				<Button
					style={{
						width: '100px',
						backgroundColor: '#ee0808',
						borderRadius: '5px',
						fontWeight: 'bolder',
						fontSize: '12px',
						color: 'white',
						height: '2.3rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
						margin:'3%'
					}}
					disabled={true}>
					SOLD OUT
				</Button>
			)}
		</>
	);
}

export default AddToCartButton;
