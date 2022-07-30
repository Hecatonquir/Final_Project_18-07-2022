import axios from 'axios';
import { GET_EVENTS, NEED_BACKUP, SHOW_EVENTS_USER } from '../ActionTypes/actiontypes';
import { useJwt } from 'react-jwt';
export default function getEvents() {
	return (dispatch) => {
		axios(`/event/allEvents`)
			.then((response) => {
				return (
					dispatch({ type: GET_EVENTS, payload: response.data }),
					dispatch({ type: NEED_BACKUP, payload: response.data }),
					dispatch({ type: SHOW_EVENTS_USER, payload: response.data })
				);
			})
			.catch((error) => console.log(error.response.data));
	};
}
