import React, { useEffect, useState } from 'react';
import { decodeToken } from 'react-jwt';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes';
import { useDispatch } from 'react-redux';
import styles from '../Styles/verifyAdmin.module.css';
import Cookies from "universal-cookie"
function Prepanel() {
	const cookies = new Cookies() 
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




	function handleChange(e) {
		return setUser({ ...user, [e.target.name]: e.target.value });
	}

	async function handleSubmit(e, person) {
		e.preventDefault();

		
try {

	let adminLogin = await axios.post('/user/login2', person, { withCredentials: true })
	
	cookies.set('access-control', adminLogin.data,{path:"/"})
	dispatch({ type: UPDATE_STATE_TRUE })
	
} catch (error) {
	alert('Not Allowed!')
	
}



		setTimeout(() => {
			
		token = document.cookie
		.split(';')[0]

		 token1 = 
		token
		.split('=')[1]
			console.log(token1)
				
			if (
				decodeToken(token1
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
