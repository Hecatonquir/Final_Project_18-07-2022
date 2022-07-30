import { GET_DETAILS } from '../ActionTypes/actiontypes';
import axios from 'axios';

export function getDetail(id) {
	return async (dispatch) => {
		try {
			let json = await axios(`/event/id/${id}`);
			return dispatch({
				type: GET_DETAILS,
				payload: json.data,
			});
		} catch (error) {
			console.log(error);
		}
	};
}
