import axios from 'axios';
import swal from 'sweetalert';

export async function postEvent(event) {
	try {
		await axios.post(`/event`, event);
		swal('Post Created!', ' ', 'success');
	} catch (error) {
		swal(error.response.data);
	}
}
