import axios from 'axios';
import swal from 'sweetalert';

export default async function userRegister(payload) {
	try {
		let coco = await axios.post(`/user/register`, payload);
		console.log(coco)
		if(payload.CBU) {
			return swal({text:"Thanks for your Interest, you will receive a response from our Support Team as soon as possible", icon: "success"})
		}
		swal(`${coco.data}`,{
			icon: 'success',
		});
	} catch (error) {
		swal(error.response.data);
	}
}
