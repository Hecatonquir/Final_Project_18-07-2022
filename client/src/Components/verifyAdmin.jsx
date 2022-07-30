import React, { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes';
import { useDispatch } from 'react-redux';
import styles from '../Styles/verifyAdmin.module.css';
function Prepanel() {
	const navigate = useNavigate();
	let dispatch = useDispatch();
	const [user, setUser] = useState({
		username: '',
		password: '',
	});

	let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]
	let tokenDecoded = decodeToken(token1);

	console.log(tokenDecoded);

	function handleChange(e) {
		return setUser({ ...user, [e.target.name]: e.target.value });
	}

	function handleSubmit(e, person) {
		e.preventDefault();

		axios
			.post('/user/login2', person, { withCredentials: true })
			.then((res) => dispatch({ type: UPDATE_STATE_TRUE }))
			.catch((error) => alert('Not Allowed!'));

		setTimeout(() => {
			if (
				decodeToken(
					document.cookie
						.split(';')
						.filter((el) => el.includes('access-token'))
						.toString()
						.split('=')[1]
				).role === 'Partner'
			) {
				navigate('/welcomeP');
			} else if (
				decodeToken(
					document.cookie
						.split(';')
						.filter((el) => el.includes('access-token'))
						.toString()
						.split('=')[1]
				).role === 'Admin'
			) {
				navigate('/welcomeA');
			}
		}, 300);
	}

	useEffect(() => {
		if (tokenDecoded && tokenDecoded.role !== 'Partner') {
			if (tokenDecoded.role !== 'Admin') {
				return alert('Not Allowed');
			} else {
				navigate('/welcomeA');
			}
		}
	}, []);

	return (
		<div className={styles.Total}>
			<div className={styles.container}>
				<form className={styles.form}>
					<h2>Control Panel</h2>
					<div>
						<p>Username</p>
						<input
							placeholder='Enter your username'
							name='username'
							type='text'
							value={user.username}
							onChange={(e) => {
								handleChange(e);
							}}></input>
					</div>
					<div>
						<p>Password</p>
						<input
							placeholder='Enter your password'
							name='password'
							type='text'
							value={user.password}
							onChange={(e) => {
								handleChange(e);
							}}></input>
					</div>
					<div>
						<button onClick={(e) => handleSubmit(e, user)}>Log In</button>
					</div>
				</form>
			</div>
		</div>
	);
}

export default Prepanel;
