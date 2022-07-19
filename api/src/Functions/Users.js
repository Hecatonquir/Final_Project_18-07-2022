const { Events, Users, etc } = require('../db');

async function getUserByName(req, res, next) {
	return 'hola';
}
async function getUserByName2(req, res, next) {
	return 'hola';
}

module.exports = { getUserByName, getUserByName2 };
