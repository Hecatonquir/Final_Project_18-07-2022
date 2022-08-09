import axios from 'axios';
import swal from 'sweetalert';
/* import getEvents from './getEvents'; */
import getUsers from './getUsers';
export async function deleteUserDB(mail, dispatch,token) {
	try {
		console.log(token)
		/* let Deleted = Lo comenté porque no se está usando nunca esta variable y no hace falta para llamar una función (lo comento para que eslint no tire errores nada más) */
		await axios.delete('/user/delete', {
			data: {email: mail, token: token },
		});

		dispatch(getUsers());

		swal({
			title: 'Deleted',
			text: 'User has been Deleted from DB...',
			icon: 'success',
			timer: 1500,
			buttons: false,
		});
	} catch (error) {
		console.log('error');
	}
}
