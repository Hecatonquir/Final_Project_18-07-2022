import axios from 'axios';
import getUsers from './getUsers';
import swal from 'sweetalert';
export const changeRole = async (role, email, dispatch,token) => {
	try {
		console.log(token)
		let roleChanged = await axios.put(
			'/user/changeRole',
			{ data: { role: role, email: email, token: token } },
			{ withCredentials: true }
		);

		dispatch(getUsers());

		swal({
			title: 'Updated',
			text: 'User role has been Updated...',
			icon: 'success',
			timer: 1500,
			buttons: false,
		});
	} catch (error) {}
};
