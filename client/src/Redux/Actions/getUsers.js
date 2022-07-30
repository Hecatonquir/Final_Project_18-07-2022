import axios from 'axios';
import { GET_USERS } from '../ActionTypes/actiontypes';

export default function getUsers() {
	return async (dispatch) => {
		try {
			let users = await axios('/user/all');

			dispatch({ type: GET_USERS, payload: users.data });
		} catch (error) {
			console.log('There was an error');
		}
	};
}
