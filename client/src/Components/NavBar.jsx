import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/NavBar.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import imgcarrito from '../Media/carri.png';
import imglogo from '../Media/logo2.png';
import ms from '../Media/ms.gif';
import mst from '../Media/mst.png';
import { isExpired, decodeToken } from 'react-jwt';
import logOut from '../Redux/Actions/logOut';
import Search from './Search.jsx';
import { Box, Button, Flex, Heading, Image, Text, useMediaQuery } from '@chakra-ui/react';
import { CLEAR_CART, UPDATE_STATE_TRUE } from '../Redux/ActionTypes/actiontypes';
import styles2 from '../Styles/Home.module.css';

function NavBar({ stateUser }) {
	let { isAuthenticated, logout, user } = useAuth0();
	let token = document.cookie.split(';')[0];
	let token1 = token.split('=')[1];

	//console.log(document.cookie);
	let tokenDecoded = decodeToken(token1);
	let dispatch = useDispatch();
	const logoutState = useSelector((state) => state.allEvents);
	const cart = useSelector((state) => state.cart);
	const events = useSelector((state) => state.showToUser);
	const active = useSelector((state) => state.loginState);
	let count = cart ? cart.length : 0;

	//Responsive
	const [mediumScreen] = useMediaQuery('(min-width: 1249px)');
	// w={!mediumScreen ? "60%" : "45%"}

	return (
		<Box marginBottom={1} padding={1} bgGradient='linear(to-r, #222831, #393E46)'>
			<Flex
				height='6vh'
				alignItems='center'
				width='100%'
				justifyContent='space-between'
				/* margin='0.5rem' */
				position='sticky'
				marginTop='1px'
				zIndex='10'>
				<Box>
					<Heading display='flex' justifyContent='center'>
						<Image
							src={ms}
							alt='img logo'
							width='fit-content'
							height='6vh'
							marginLeft='5%'
							marginTop='8%'
						/>
						<Image
							src={mst}
							alt='img logo'
							width='fit-content'
							height='10vh'
							/* marginLeft="35%" */
							marginTop='4%'
						/>
						<Image
							src={ms}
							alt='img logo'
							width='fit-content'
							height='6vh'
							marginLeft='2%'
							marginTop='8%'
						/>
					</Heading>
				</Box>

				<Box className={styles2.welcome} marginTop='5px'>
					{stateUser || !isExpired(token) ? (
						<Text
							color='#FD7014'
							width='fit-content'
							textAlign='center'
							fontWeight='bold'
							fontSize='1.5em'>
							Welcome {tokenDecoded ? tokenDecoded.name : 'Guest'}
						</Text>
					) : (
						<Text color='#FD7014' fontWeight='bold' fontSize='1.5em' textAlign='center'>
							Welcome Guest
						</Text>
					)}
				</Box>

				<Box justifyContent='space-around'>
					{!token ? (
						<Box width='fit-content'>
							<Link to='/login'>
								<Button
									width='fit-content'
									bg='#FD7014'
									color='white'
									_hover={{ bg: '#EEEEEE', color: 'black' }}>
									Login/Sign Up
								</Button>
							</Link>
						</Box>
					) : (
						<Box></Box>
					)}
					{token && (
						<Button
							width='fit-content'
							bg='#FD7014'
							_hover={{ bg: '#EEEEEE', color: 'black' }}
							className={styles.Button}
							color='white'
							onClick={() => {
								dispatch({ type: 'LOAD_FAV', payload: [] });
								dispatch({ type: CLEAR_CART });
								return logOut(dispatch);
							}}>
							<Text>Log Out</Text>
						</Button>
					)}
					{/* {token && tokenDecoded.role === 'Partner' && active && (
							<Link to='/createEvent'>
								<button className={styles.Button}>Create an Event</button>
							</Link>
						)} */}
				</Box>
				<Flex width='fit-content' justifyContent='space-evenly'>
					<Box>
						{token &&
							tokenDecoded &&
							(tokenDecoded.role === 'Partner' || tokenDecoded.role === 'Admin') &&
							active && (
								<div>
									<Link to='/createEvent'>
										<Button
											width='fit-content'
											bg='#FD7014'
											color='white'
											_hover={{ bg: '#EEEEEE', color: 'black' }}>
											Create an Event
										</Button>
									</Link>

									<Link
										to={
											tokenDecoded.role === 'Admin' ? '/welcomeA' : `/welcomeP/${tokenDecoded.id}`
										}>
										<Button
											width='fit-content'
											bg='#FD7014'
											color='white'
											_hover={{ bg: '#EEEEEE', color: 'black' }}>
											Control Panel
										</Button>
									</Link>
								</div>
							)}
					</Box>

					{(token && active && (
						<Box>
							<Link to='/profile'>
								<Button
									width='fit-content'
									bg='#FD7014'
									color='white'
									_hover={{ bg: '#EEEEEE', color: 'black' }}>
									<Text>Profile</Text>
								</Button>
							</Link>
						</Box>
					)) || (
						<Box>
							<Link to='/reqPartner'>
								<Button
									width='fit-content'
									bg='#FD7014'
									color='white'
									_hover={{ bg: '#EEEEEE', color: 'black' }}>
									Become a Partner
								</Button>
							</Link>
						</Box>
					)}
				</Flex>

				<Box>
					<Link to={token ? '/cart' : '/login'}>
						<Image src={imgcarrito} alt='img carrito' width='3rem' marginRight='1rem' />
						<span className={styles.count}>{count}</span>
					</Link>
				</Box>
			</Flex>
		</Box>
	);
}

export default NavBar;
