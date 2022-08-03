import axios from 'axios';
import swal from 'sweetalert';

export async function sendPartnerForm(formPartner) {
	try {
		await axios.post(`/support/createTicket`, formPartner, { withCredentials: true });
		swal('Post Created!', ' ', 'success');
	} catch (error) {
		swal(error.response.data);
	}
}
