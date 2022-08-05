export default function updateFavourite(id) {
	return {
		type: 'UPDATE_DB_FAVOURITE',
		payload: id,
	};
}
