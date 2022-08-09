import axios from 'axios';
import swal from 'sweetalert';

export async function postEvent(event,email) {
	try {
		console.log(email)
		await axios.post(`/event`, {event, Email: email});
		swal('Your request is under review! Thanks for your patience!', ' ', 'success');
	} catch (error) {
		swal(error.response.data);
	}
}
