import axios from 'axios';
import swal from 'sweetalert';

export default async function userRegister(payload) {
	try {
		await axios.post(`/user/register`, payload);
		swal('User Registered Succesfully', {
			icon: 'success',
		});
	} catch (error) {
		swal(error.response.data);
	}
}
