import axios from 'axios';
import { LOAD_CART, UPDATE_STATE_TRUE } from '../ActionTypes/actiontypes';
import swal from 'sweetalert';


export async function logInUser(payload, navigate, dispatch, setCookie) {
	try {
		let user = await axios.post(`/user/login`, payload, {
			withCredentials: true,
		});
		

		setCookie('access-control', user, {path: "/"})

		

		console.log(user)

		dispatch({ type: LOAD_CART, payload: user.data[0].Cart });

		dispatch({ type: UPDATE_STATE_TRUE });

		swal({
			title: 'Login Success',
			text: 'Redirecting...',
			icon: 'success',
			timer: 2000,
			buttons: false,
		});

		setTimeout(() => {
			navigate('/');
		}, 2000);
	} catch (error) {
		console.log(error);
		swal({
			title: 'Error',
			icon: 'error',
			text: error.response.data,
			timer: 1000,
			buttons: false,
		});
	}
}
