import axios from 'axios';
import swal from 'sweetalert';

export function postSupports(payload) {
	console.log('soy el soporte', payload);
	return async () => {
		try {
			await axios.post('/support/', payload);

			swal('Note Created!', {
				icon: 'success',
			});
		} catch (error) {
			swal('Sorry, we cant send your inquiry at this moment...', {
				icon: 'error',
			});
			console.log(error);
		}
	};
}
