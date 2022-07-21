const { Events, Users } = require('../db');
const { Op } = require('sequelize');

const getAllUsers = async (req, res, next) => {
	res.send(await Users.findAll());
};

const getUserByName = async (req, res) => {
	const { Name } = req.params;
	try {
		const usersBox = await Users.findAll({
			where: {
				Name: {
					[Op.iLike]: '%' + Name + '%',
				},
			},
		});
		res.send(usersBox);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const getUserById = async (req, res) => {
	const ID = req.params;
	try {
		const userBox = await Users.findAll({
			where: ID,
		});
		res.send(userBox);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const addUser = async (req, res) => {
	try {
		const created = await Users.bulkCreate(req.body);
		res.send(created);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const deleteUser = async (req, res) => {
	try {
		const targetUser = await Users.findByPk(req.params.id);
		const userBox = targetUser;
		await targetUser.destroy();
		res.send(`User "${userBox.Name}" deleted successfully`);
	} catch (error) {
		res.status(404).send(error.stack);
	}
};

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

module.exports = {
	getAllUsers,
	getUserByName,
	getUserById,
	addUser,
	deleteUser,
	getPartnerCreatedEvents,
};
