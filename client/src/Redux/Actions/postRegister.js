import axios from 'axios';
import swal from 'sweetalert';

export default async function userRegister(payload) {
	try {
		let coco = await axios.post(`/user/register`, payload);
		console.log(coco)
		swal(`${coco.data}`,{
			icon: 'success',
		});
	} catch (error) {
		swal(error.response.data);
	}
}
