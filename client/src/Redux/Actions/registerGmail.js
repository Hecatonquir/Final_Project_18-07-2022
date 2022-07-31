import axios from 'axios';
import { UPDATE_STATE_TRUE } from '../ActionTypes/actiontypes';
import Cookies from "universal-cookie"

export default function registerGmail(user) {
	return (dispatch) => {
		const cookies = new Cookies() 
		if (user) {
			let usertoRegister = {
				Name: user.given_name,
				Username: null,
				Password: null,
				Email: user.email,
				Image: user.picture,
				Location: null,
				Role: null,
			};

			axios
				.post('/user/registerG', usertoRegister, { withCredentials: true })
				.then(response => cookies.set('access-control', response.data,{path:"/"}))
				.then(res => {
					document.cookie="auth0.2MXTHb1HKWD4UvsRtIwH3ZxR9hdC9QUW.is.authenticated=; Max-Age=-99999999;"
					document.cookie="_legacy_auth0.2MXTHb1HKWD4UvsRtIwH3ZxR9hdC9QUW.is.authenticated=; Max-Age=-99999999;"
				}).then(res => dispatch({type: UPDATE_STATE_TRUE}))
				
				.catch((error) => console.log(error));
		}
	};
}
