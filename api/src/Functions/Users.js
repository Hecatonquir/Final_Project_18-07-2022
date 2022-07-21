const { Events, Users, etc } = require('../db');

async function getUserByName(req, res, next) {
	return 'hola';
}
async function getUserByName2(req, res, next) {
	return 'hola';
}

const getPartnerCreatedEvents = async (req, res) => {
	const { ID } = req.params;
	try {
		const Partner = await Users.findByPK(ID);
		const allPartnerEvents = Partner.CreatedEvents;
		res.send(allPartnerEvents);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

module.exports = { getUserByName, getPartnerCreatedEvents };
