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
		<div>
			{price === 0 && quantity === 0 ? (
				<h6
					style={{
						width: '100px',
						backgroundColor: 'green',
						borderRadius: '5px',
						fontWeight: 'bolder',
						fontSize: '12px',
						color: 'white',
						height: '2.3rem',
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'center',
					}}>
					FREE!
				</h6>
			) : price !== 0 && quantity !== 0 ? (
				<button
					className={styles.Button2}
					onClick={() =>
						handleClick()
					} /* disabled={quantity === 0 ? true : false } Esto funciona pero no le avisa al usuario por qué no le agrega el evento al card. Habría que agregar la misma condición a classname y cambiarle el estilo*/
				>
					Add To <img src={carticon} alt='not imgcart' className={styles.carticon} />
				</button>
			) : (
				<h6
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
					}}>
					SOLD OUT
				</h6>
			)}
		</div>
	);
}

export default AddToCartButton;
