import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { decodeToken } from 'react-jwt';
import PageNotFound from './Page404';
import getUsers from '../Redux/Actions/getUsers';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUserDB } from '../Redux/Actions/deleteUser';
import { deleteEvent } from '../Redux/Actions/deleteEvent';
import getEvents from '../Redux/Actions/getEvents';
import Nav from './Nav'
import styles from '../Styles/AdminPanel.module.css';
import { changeRole } from '../Redux/Actions/updateRole';
import { banUnbanUser } from '../Redux/Actions/banUnbanUser';
import { eachWeekOfInterval } from 'date-fns';
import { Box, Heading, Image, Text, Button } from "@chakra-ui/react";
import { GET_EVENTS, GET_USERS } from '../Redux/ActionTypes/actiontypes';

function AdminPanel() {

	let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]
	let tokenDecoded = decodeToken(token1);
	


	let usersBD = useSelector((state) => state.allUsers);
	let events = useSelector((state) => state.allEvents);
	
	const backUperE= useSelector(state => state.eventsBackUp)

	let dispatch = useDispatch();
	let navigate = useNavigate();
	const [admin, setAdmin] = useState(false);
	let [arrayUsers, setArrUsers] = useState(usersBD)

	let [userADM, setUser] = useState({
		username: '',
		posts: '',
	});

	let [actRoles, setAct] = useState(false);


	function handleChange(e) {
		setUser({ ...userADM, [e.target.name]: e.target.value })
		return e.target.name === "username" ? dispatch({type: GET_USERS, payload: e.target.value === "" ? arrayUsers: arrayUsers.filter(el => {
			if(el.Email.toLowerCase().includes(e.target.value.toLowerCase())) {
				return el
			}})
			.slice(0,6)})
			: dispatch({type: GET_EVENTS, payload: e.target.value === "" ? backUperE: backUperE.slice().filter(el => {
				if(el.Name.toLowerCase().includes(e.target.value.toLowerCase())) {
				
					return el
				}})
				.slice(0,6)})
	}

	useEffect(() => {
		axios.post('/user/admin', {token: token1})
			.then((response) => setAdmin(true))
			.then((response) => dispatch(getUsers()))
			.then((response) => dispatch(getEvents()))
			.catch((error) => navigate('/'));

		return () => {};
	}, []);

	return (
		<div className={styles.Total}>
			<Nav />
			<div className={styles.subTotal}>
			<div>
				{admin && <h1 className={styles.title}>Welcome {tokenDecoded && tokenDecoded.name}</h1>}
			</div>

			<div className={styles.container}>
				<div className={styles.rightcolumn}>
					<h4 className={styles.subtitle}>All Users</h4>
					<div className={styles.containerinput}>
						{admin && (
							<input
								className={styles.input}
								name='username'
								type='text'
								placeholder='Search User'
								value={userADM.username}
								onChange={(e) => handleChange(e)}></input>
						)}
					</div>
				
					<div>
						{usersBD.length &&
							admin &&
							usersBD.slice(0,6)
								.map((el, i) => (
									<div key={i}>
										<div className={styles.containerButton}>
											<button
												className={styles.button1}
												onClick={() => {
													deleteUserDB(el.Email, dispatch);
													setUser({ username: '', posts: '' });
												}}>
												Delete User
											</button>
											
											<button
												className={styles.button3}
												onClick={() => {
													actRoles ? setAct(false) : setAct(true);
												}}>
												Change Role
											</button>
											<button
												className={styles.button4}
												hidden={actRoles ? false : true}
												name='Admin'
												onClick={(e) => changeRole(e.target.name, el.Email, dispatch)}>
												Admin
											</button>
											<button
												className={styles.button4}
												hidden={actRoles ? false : true}
												name='Partner'
												onClick={(e) => changeRole(e.target.name, el.Email, dispatch)}>
												Partner
											</button>
											<button
												className={styles.button4}
												hidden={actRoles ? false : true}
												name='User'
												onClick={(e) => changeRole(e.target.name, el.Email, dispatch,tokenDecoded.id)}>
												User
											</button>
											<button
												className={styles.button5}
												onClick={() => {
													banUnbanUser(el.isBan ? false : true, el.Email, dispatch);
												}}>
												{el.isBan ? 'Unban User' : 'Ban User'}
											</button>
										</div>

									<Link to={`/user/${el.ID}`}>
										<Text >
											User: {el.Name} || Email: {el.Email} || Role: {el.Role} || is Ban:{' '}
											{el.isBan ? 'true' : 'false'}
										</Text>
										</Link>


									</div>
								))}
					</div>
					
				</div>

				<div className={styles.leftcolumn}>
					<h4 className={styles.subtitle}>All Events</h4>
					<div className={styles.containerinput}>
						{admin && (
							<input
								className={styles.input}
								name='posts'
								type='text'
								placeholder='Search Event'
								value={userADM.posts}
								onChange={(e) => handleChange(e)}></input>
						)}
					</div>

					<div>
						{events.length &&
							admin &&
							events
								
								.slice(0, 6)
								.map((el, i) => (
									<div key={i} >
										<div className={styles.containerButton}>
											<button
												className={styles.button1}
												onClick={() => {
													return deleteEvent(el.ID,dispatch,el.isErased? false: true), setUser({ username: '', posts: '' });
												}}>
												{el.isErased ? "Restore Event": "Ban/Erase Event"}
											</button>
											<button className={styles.button2} onClick={() => {}}>Update Event</button>
										</div>
										<Text>
											Name: {el.Name} || Price: {el.Price} || City: {el.City} || Quantity:{' '}
											{el.Quantity} || Partner:{' '}
										</Text>{' '}
									</div>
								))}
					</div>



					
				</div>
			</div>
			</div>
		</div>
	);
}

export default AdminPanel;
