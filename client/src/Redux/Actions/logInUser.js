import axios from 'axios';
import { LOAD_CART, UPDATE_STATE_TRUE } from '../ActionTypes/actiontypes';
import swal from 'sweetalert';

export async function logInUser(payload, navigate, dispatch, setCookie) {
	try {
		let user = await axios.post(`/user/login`, payload, {
			withCredentials: true,
		});

		swal({
			title: 'Login Success',
			text: 'Redirecting...',
			icon: 'success',
			timer: 2000,
			buttons: false,
		});

		setTimeout(() => {
			navigate('/');
			setCookie('access-control', user.data, { path: '/' });
		}, 2000);
	} catch (error) {
		//console.log('🐲🐲🐲 / file: logInUser.js / line 24 / error:\n', error);
		swal('This account has been banned.', {
			title: "Couldn't logg in",
			icon: 'error',
			timer: 10000,
			buttons: false,
		});
	}
}
