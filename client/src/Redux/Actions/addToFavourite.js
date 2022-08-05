import axios from 'axios';

export default async function addToFavourite({ idUser, idEvent }) {
	try {
		axios.put(`/user/addToFavourite/${idUser}/${idEvent}`);
		console.log(
			'🐲🐲🐲 / file: updateFavourite.js / line 6 / ADDED TO FAVOURITE',
			'ADDED TO FAVOURITE'
		);
	} catch (error) {
		console.log('🐲🐲🐲 / file: updateFavourite.js / line 9 / error', error.stock);
	}
}
