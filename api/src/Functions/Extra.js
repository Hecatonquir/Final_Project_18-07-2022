const { Events, Users } = require('../db.js');
const { eventsApi, userApi } = require('../LocalApi');

const uploadDataBase = async (req, res) => {
	try {
		await Events.bulkCreate(eventsApi);
		await Users.bulkCreate(userApi);
		console.log('Data Base Uploaded');
	} catch (error) {
		console.log('Data Base NOT Uploaded');
		console.log('🐲🐲🐲 / file: Events.js / line 69 / error:\n', error.stack);
	}
};

module.exports = {
	uploadDataBase,
};