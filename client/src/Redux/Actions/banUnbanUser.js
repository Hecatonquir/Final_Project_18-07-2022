import axios from 'axios';
import swal from 'sweetalert';
import getUsers from './getUsers';

export const banUnbanUser = async (veredict, email, dispatch) => {
	try {
		let banedOrNot = await axios.put(
			'/user/banUnban',
			{
				data: {
					ban: veredict,
					email: email,
				},
			},
			{ withCredentials: true }
		);
		dispatch(getUsers());

		swal({
			title: 'Updated',
			text: 'User status has been Updated...',
			icon: 'success',
			timer: 1500,
			buttons: false,
		});



	} catch (error) {
		swal({
			title: 'Error',
			icon: 'error',
			text: 'An error has ocurred, please contact an Admin',
			timer: 2000,
			buttons: false,
		});
	}
};
