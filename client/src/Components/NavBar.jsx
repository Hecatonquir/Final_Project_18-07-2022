import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/NavBar.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import imgcarrito from '../Media/carri.png';
import imglogo from '../Media/logo2.png';
import ms from "../Media/ms.gif"
import mst from "../Media/mst.png"
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
	   const [mediumScreen] = useMediaQuery("(min-width: 1249px)");
	   // w={!mediumScreen ? "60%" : "45%"}

	return (
		<Box marginBottom={4} padding={1} bgGradient="linear(to-r, #222831, #393E46)">
			<Flex
				alignItems='center'
				width='100%'
				justifyContent='space-between'
				margin='0.5rem'
				position='sticky'
				top='0px'
				zIndex='10'>
					
				<Box>
				<Heading display="flex" justifyContent="center">
      					<Image  
              
							src={ms}
							alt='img logo'
							width='3vw'
							height='3vh'
							marginLeft='0%'
							marginTop='5%'
						/>
       				 <Image 
        				 src={mst}
         					alt='img logo'
         					width="10vw"
        					 height="10vh"
        				 /* marginLeft="35%" */
       				 /*  marginTop="1%" */
        			/>  
					<Image
        			src={ms}
       				 alt='img logo'
        			width='3vw'
       				 height='3vh'
        			marginLeft='2%'
       			 	marginTop='5%'
     			 />
						
			</Heading>
			
				</Box>

				<Box className={styles2.welcome} marginTop='5px'>
					{stateUser || !isExpired(token) ? (
						<Text color='#FD7014' marginLeft='2em' textAlign='center' fontWeight='bold' fontSize='1.5em'>
							Welcome {tokenDecoded ? tokenDecoded.name : 'Guest'}
						</Text>
					) : (
						<Text color='#FD7014' fontWeight='bold' fontSize='1.5em' textAlign='center'>Welcome Guest</Text>
					)}
				</Box>

				<Box justifyContent='space-around'>
					{!token ? (
						<Box marginLeft='5rem'>
							<Link to='/login'>
								<Button bg='#FD7014' color='white' _hover={{ bg: '#EEEEEE', color: 'black' }}>
									Login/Sign Up
								</Button>
							</Link>
						</Box>
					) : (
						<Box></Box>
					)}
					{token && (
						<Button
							marginLeft='24rem'
							marginRight='2rem'
							bg='#FD7014'
							_hover={{ bg: '#EEEEEE', color: 'black' }}
							className={styles.Button}
							color='white'
							onClick={() => {
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
				<Flex width='40%' justifyContent='space-evenly'>
					<Box>
						{token &&
							tokenDecoded &&
							(tokenDecoded.role === 'Partner' || tokenDecoded.role === 'Admin') &&
							active && (
								<div>
								<Link to='/createEvent'>
									<Button bg='#FD7014' color='white' _hover={{ bg: '#EEEEEE', color: 'black' }}>
										Create an Event
									</Button>
								</Link>

			<Link to={tokenDecoded.role === "Admin" ? "/welcomeA": `/welcomeP/${tokenDecoded.id}` }>
			<Button
			    marginLeft='1em'
  				bg="#FD7014"
 				 color="white"
  				_hover={{ bg: "#EEEEEE", color: "black" }}
>
 		 Control Panel
		</Button>
		</Link>
			</div>
							)}
					</Box>

					
						{token && active && (
							<Box>
							<Link to='/profile'>
								<Button bg='#FD7014' color='white' _hover={{ bg: '#EEEEEE', color: 'black' }}>
									<Text>Profile</Text>
								</Button>
									</Link>
									</Box>
						)
					
					||(<Box >
							<Link to='/reqPartner'>
								<Button bg='#FD7014' color='white' _hover={{ bg: '#EEEEEE', color: 'black' }}>
									Become a Partner
								</Button>
							</Link>
						</Box>)}
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


