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
import { Box, Heading, Image, Text, Button, Flex, Input } from "@chakra-ui/react";
import {Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableContainer} from '@chakra-ui/react'
import { GET_EVENTS, GET_USERS } from '../Redux/ActionTypes/actiontypes';
import TicketsUsers from './TicketsFromUsers'
import validateAdminDB from '../Redux/Actions/validateAdminDB';

function AdminPanel() {

	let token = document.cookie
		.split(';')[0]
	let token1 = 
		token
		.split('=')[1]
	let tokenDecoded = decodeToken(token1);

	


	let usersBD = useSelector((state) => state.allUsers);
	let events = useSelector((state) => state.allEvents);
	let arrayUsers = useSelector(state => state.usersBackUp)
	const backUperE= useSelector(state => state.eventsBackUp)
	const [toggleState, setToggleState] = useState(1);

	let dispatch = useDispatch();
	let navigate = useNavigate();


	// if(tokenDecoded) {
	// 	validateAdminDB(tokenDecoded.id, navigate)
	// }

	const [admin, setAdmin] = useState(false);
	

	let [userADM, setUser] = useState({
		username: '',
		posts: '',
	});

	let [actRoles, setAct] = useState(false);


	function handleChange(e) {
		setUser({ ...userADM, [e.target.name]: e.target.value })
		return e.target.name === "username" ? dispatch({type: GET_USERS, payload: !e.target.value? arrayUsers: arrayUsers.filter(el => {
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
		axios.post('/user/admin/validate', {data: {token: token1}})
			.then((response) => setAdmin(true))
			.then((response) => dispatch(getUsers(token1)))
			.then((response) => dispatch(getEvents()))
			.catch((error) => navigate('/'));

		return () => {};
	}, []);

	const toggleTab = (index) => {
		setToggleState(index);
	  };
	

	return (
		<Box bg='#393E46' minW='100vw' minH='100vh'>
			<Nav />
			<Link to ="/eventReq"><button>Event Request</button></Link> 
			{admin && <Text color='white' fontSize='2em' textAlign='center' >Welcome {tokenDecoded && tokenDecoded.name}</Text>}
			<Flex justifyContent='center'>
				<div className={styles.container}>
				<div className={styles.bloctabs}>
					<button
						className={toggleState === 1 ? `${styles.tabs} ${styles.activetabs}`: styles.tabs}
						onClick={() => toggleTab(1)}>
						All Users
					</button>
					<button
						className={toggleState === 2 ? `${styles.tabs} ${styles.activetabs}` : styles.tabs}
						onClick={() => toggleTab(2)}>
						All Events
					</button> 
					<button
						className={toggleState === 3 ? `${styles.tabs} ${styles.activetabs}`: styles.tabs}
						onClick={() => toggleTab(3)}>
						All Tickets
					</button>
				</div>

				<div className={styles.contenttabs}>
					<div className={toggleState === 1 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
						{/* contenido del input	 */}
						<div className={styles.containerinput}>
							{admin && (
								<Input
									// className={styles.input}
									width='20rem'
									borderColor='#FD7014'
									bg='white'
									name='username'
									mb='2rem'
									type='text'
									placeholder='Search User'
									value={userADM.username}
									onChange={(e) => handleChange(e)}></Input>
							)}
						</div>
					{/* // conteido todos los users */}
			
					<Table variant='simple'>
							<Thead>
							<Tr>
								<Flex mr='5rem'>
								<Th >Nº</Th>
								<Th mr='2rem'>USER</Th>
								<Th mr='8rem'>EMAIL</Th>
								<Th mr='2rem'>ROLE</Th>
								<Th mr='2rem'>BANNED</Th>
								</Flex>
								<Th>ACTION</Th>
							</Tr>
							</Thead>
					</Table>
					
		 			{usersBD.length &&
							admin &&
							usersBD.slice(0,6)
								.map((el, i) => (
									<Box key={i}>
										
									<Flex flexDirection='row' justifyContent='space-between'>
										
										
										<TableContainer>
												<Table variant='simple'>
													<Tbody>
													<Tr>
													<Link to={`/user/${el.ID}`}>
														<Td>{i+1}</Td>
														<Td width='8rem'>{el.Name}</Td>
														<Td width='12rem'>{el.Email}</Td>
														<Td width='8rem'>{el.Role}</Td>
														<Td width='6rem' color={el.isBan === true? 'red': 'green'}>{el.isBan ? 'true' : 'false'}</Td>
														</Link>
													</Tr>
													</Tbody>
												</Table>
										</TableContainer>


										<Flex justifyContent='space-around'>
											<Button
												bg='#F15F5F'
												color='white'
												size='sm'
												m='0.5em'
												className={styles.button1}
												onClick={() => {
													deleteUserDB(el.Email, dispatch, token1);
													setUser({ username: '', posts: '' });
												}}>
												Delete User
											</Button>
											
											<Button
												bg='#2780A9'
												color='white'
												size='sm'
												m='0.5em'
												className={styles.button3}
												onClick={() => {
													actRoles ? setAct(false) : setAct(true);
												}}>
												Change Role
											</Button>
											<Button
												bg='#99CAE6'
												size='sm'
												m='0.5em'
												className={styles.button4}
												hidden={actRoles ? false : true}
												name='Admin'
												onClick={(e) => changeRole(e.target.name, el.Email, dispatch, token1)}>
												Admin
											</Button>
											<Button
												bg='#99CAE6'
												size='sm'
												m='0.5em'
												className={styles.button4}
												hidden={actRoles ? false : true}
												name='Partner'
												onClick={(e) => changeRole(e.target.name, el.Email, dispatch,token1)}>
												Partner
											</Button>
											<Button
												bg='#99CAE6'
												size='sm'
												m='0.5em'
												className={styles.button4}
												hidden={actRoles ? false : true}
												name='User'
												onClick={(e) => changeRole(e.target.name, el.Email, dispatch,token1)}>
												User
											</Button>
											<Button
												bg='#35A15E'
												color='white'
												size='sm'
												m='0.5em'
												className={styles.button5}
												onClick={() => {
													banUnbanUser(el.isBan ? false : true, el.Email, dispatch, token1);
												}}>
												{el.isBan ? 'Unban User' : 'Ban User'}
											</Button>
											</Flex>
										
										</Flex>
									</Box>
								))}
					
					</div>

					<div className={toggleState === 2 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
							
							<div className={styles.containerinput}>
								{admin && (
									<Input
										width='20rem'
										borderColor='#FD7014'
										bg='white'
										mb='2rem'
										name='posts'
										type='text'
										placeholder='Search Event'
										value={userADM.posts}
										onChange={(e) => handleChange(e)}></Input>
								)}
							</div>

							<Table variant='simple'>
								<Thead>
									<Tr>
										<Flex mr='5rem'>
										<Th >Nº</Th>
										<Th mr='14rem'>EVENT</Th>
										<Th mr='3rem'>PRICE</Th>
										<Th mr='3rem'>CITY</Th>
										<Th mr='2rem'>QUANTITY</Th>
										<Th mr='2rem'>PARTNER</Th>
										</Flex>
										<Th>ACTION</Th>
									</Tr>
								</Thead>
							</Table>

		 						{events.length &&
								admin &&
								events
								.slice(0, 6)
								.map((el, i) => (
									<div key={i} >

									<Flex flexDirection='row' justifyContent='space-between'> 
										{/* <Link to={`/details/id/${el.ID}`}>
											<Text>
											Name: {el.Name} || Price: {el.Price} || City: {el.City} || Quantity:{' '}
											{el.Quantity} || Partner:{' '}
										</Text>{' '}
										</Link> */}

										<TableContainer>
												<Table variant='simple'>
													<Tbody>
													<Tr>
													<Link to={`/details/id/${el.ID}`}>
														<Td>{i+1}</Td>
														<Td width='20rem'>{el.Name}</Td>
														<Td width='8rem'>{el.Price ? '$'+el.Price : 'Free'}</Td>
														<Td width='10rem'>{el.City}</Td>
														<Td width='8rem'>{el.Quantity}</Td>
														<Td width='6rem'>Partner:{' '}</Td>
														</Link>
													</Tr>
													</Tbody>
												</Table>
										</TableContainer>

											<Button
												bg='#35A15E'
												color='white'
												size='sm'
												m='0.5em'
												className={styles.button1}
												onClick={() => {
													return deleteEvent(el.ID,dispatch,el.isErased? false: true), setUser({ username: '', posts: '' });
												}}>
												{el.isErased ? "Restore Event": "Ban/Erase Event"}
											</Button>

									</Flex>
									</div>
								))}
						</div>
							{/* //Tercer Bloque */}
								<div className={toggleState === 3 ? `${styles.content}  ${styles.activecontent}` : styles.content}>
								<TicketsUsers/>
								</div>
				
				</div>
				</div>
			</Flex>
		</Box>
	);
}

export default AdminPanel;
