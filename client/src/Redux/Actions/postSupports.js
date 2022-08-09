import axios from 'axios';
import swal from 'sweetalert';
import { getUserDetails } from './getUserDetails';

export async function postSupports(payload, id, dispatch) {
	console.log('soy el soporte');
	try {
		await axios.post('/support/createTicket', payload);

		if(id) {
		dispatch(getUserDetails(id))
		}

		swal({
			title: 'Ticket Created!',
			text: "You'll receive an answer from Support as soon as possible",
			icon: 'success',
		});
	} catch (error) {
		swal('Sorry, we cant send your inquiry at this moment...', {
			icon: 'error',
		});
		console.log(error);
	}
}
