export default function updateFavourite(id) {
	console.log('ACTION updateFavourite');
	return {
		type: 'UPDATE_DB_FAVOURITE',
		payload: id,
	};
}
