import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCart } from '../Redux/Actions/addToCart';
import styles from '../Styles/Detail.module.css';
import carticon from '../Media/carri.png';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import { updateCart } from '../Redux/Actions/updateCart';

function AddToCartButton({ id }) {
	let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]
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
		<button className={styles.Button2} onClick={() => handleClick()}>
			Add To <img src={carticon} alt='not imgcart' className={styles.carticon} />
		</button>
	);
}

export default AddToCartButton;
