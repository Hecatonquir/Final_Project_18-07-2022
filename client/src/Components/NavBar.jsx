import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styles from '../Styles/NavBar.module.css';
import { useAuth0 } from '@auth0/auth0-react';
import imgcarrito from '../Media/carri.png';
import imglogo from '../Media/logo2.png'
import { isExpired, decodeToken } from 'react-jwt';
import logOut from '../Redux/Actions/logOut';
import Search from './Search.jsx';
import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { CLEAR_CART } from '../Redux/ActionTypes/actiontypes';

function NavBar() {
	let { isAuthenticated, logout, user } = useAuth0();

	let token = document.cookie
		.split(';')
		.filter((el) => el.includes('access-token'))
		.toString()
		.split('=')[1];
	//console.log(document.cookie);
	let tokenDecoded = decodeToken(token);
	let dispatch = useDispatch();
	const logoutState = useSelector((state) => state.allEvents);
	const cart = useSelector((state) => state.cart);
	const events = useSelector((state) => state.showToUser);
	const active = useSelector((state) => state.loginState);
	let count = cart ? cart.length : null;


	//  return (
	//     <Box marginBottom={6} padding={2} bgGradient='linear(to-b, #a28748, #6c5727)'>
	//       <Flex justifyContent="space-around" alignItems="center">
	//         <Box>
	//           <Heading as="h4" color='white'>Events Henry</Heading>
	//         </Box>
	//         <Search />
	//         <Box>
	//           <Flex alignItems="center" width="35em" justifyContent="space-between">
	//             <Box>
	//               {!token || !active ? (
	//                 <Button bg='#1a78b1' onClick={() => loginWithRedirect()}>
	//                   <span>Log In/Sign Up</span>
	//                 </Button>
	//               ) : (
	//                 <Button bg='#1a78b1' onClick={() => logout()}>
	//                   <span>Log Out</span>
	//                 </Button>
	//               )}
	//               {token &&tokenDecoded.role !== "Guest" && tokenDecoded.role !== "User" && active && (
	//                 <Link to="/createEvent">
	//                   <Button marginLeft={4} bg='#1a78b1'>Create an Event</Button>
	//                 </Link>
	//               )}
	//             </Box>


	//             {isAuthenticated ? (
	//               <Box>
	//                 <Link to="/profile">
	//                   <Button bg='#1a78b1'>
	//                     <span>Profile</span>
	//                   </Button>
	//                 </Link>
	//               </Box>
	//             ) : (
	//               <Box></Box>
	//             )}
	//             <Box>
	//               <Link to="/contact">
	//                 <Button bg='#1a78b1'>
	//                   <span>Contact Us</span>
	//                 </Button>
	//               </Link>
	//             </Box>
	//             <Box>
	//               <Link to="/cart">
	//                 <Image src={imgcarrito} alt="img carrito" width={10} />
	//                 <span className={styles.count}>{count}</span>
	//               </Link>
	//             </Box>
	//           </Flex>
	//         </Box>
	//       </Flex>
	//     </Box>
	//   )

	return (
		<Box marginBottom={6} padding={2} bgGradient='linear(to-b, blue.700, green.500)'>
				<Flex alignItems='center' width='100%' justifyContent='space-between' margin='0.5rem'>
					<Box>
						<Heading as='h4' color='white'>
						<Image src={imglogo} alt='img logo' width='6.5rem' height='4rem' marginLeft='1rem' marginTop='0rem'/>
						</Heading>
					</Box>
					<Box>
						{!token || isExpired(token) || !active ? (
							<Box>
								<Link to='/login'>
									<Button bg='#f4a69a' >Login/Sign Up</Button>
								</Link>
							</Box>
						) : (
							<Box></Box>
						)}

						{!isExpired(token) && tokenDecoded.role !== 'Guest' && active && (
							<Button
								bg='#f4a69a'
								className={styles.Button}
								color='white'
								onClick={() => { dispatch({type: CLEAR_CART}); return logOut('access-token', dispatch, isAuthenticated, logout)}}>
								<Text>Log Out</Text>
							</Button>
						)}

						{/* {token && tokenDecoded.role === 'Partner' && active && (
							<Link to='/createEvent'>
								<button className={styles.Button}>Create an Event</button>
							</Link>
						)} */}

						{token && tokenDecoded.role === 'Partner' && active && (
							<Link to='/createEvent'>
								<Button bg='#f4a69a' >Create an Event</Button>
							</Link>
						)}
					</Box>
					{token && active && (
						<Box>
							<Link to='/profile'>
								<Button bg='#f4a69a'>
									<Text>Profile</Text>
								</Button>
							</Link>
						</Box>
					)}
					<Box>
						<Search />
					</Box>
					<Box>
						<Link to='/cart'>
							<Image src={imgcarrito} alt='img carrito' width='3rem' marginRight='1rem' />
							<span className={styles.count}>{count}</span>
						</Link>
					</Box>
				</Flex>
		</Box>
	);
}

export default NavBar;
