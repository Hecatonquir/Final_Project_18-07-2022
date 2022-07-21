const { Op } = require('sequelize');
const { Events, Users } = require('../db.js');
const { eventsApi } = require('../LocalApi');

const getAllEvents = async (req, res, next) => {
	res.send(await Events.findAll());
};

const deleteEvent = async (req, res) => {
	try {
		const trash = await Events.findByPk(req.params.id);
		const trash2 = trash;
		await trash.destroy();
		res.send(`Event "${trash2.Name}" deleted successfully`);
	} catch (error) {
		res.status(404).send(error.stack);
	}
};

const createEvent = async (req, res) => {
	try {
		const created = await Events.create(req.body);
		res.send(created);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};
const modifyEvent = async (req, res, next) => {
	return 'hola';
};
const getEventByName = async (req, res) => {
	const { Name } = req.params;

	try {
		const found = await Events.findAll({
			where: {
				Name: {
					[Op.iLike]: '%' + Name + '%',
				},
				/* el Op.iLike sirve para buscar algo parecido a lo que yo le pida. El i sirve para indicar que sea case Insensitive. 
				El % sirve para decir que puede haber algo antes y/o después del Name (por eso lo pongo antes y después) */
			},
		});
		res.send(found);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const getEventById = async (req, res) => {
	const ID = req.params;

	try {
		const found = await Events.findAll({
			where: ID,
		});
		res.send(found);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const uploadDataBase = async (req, res) => {
	try {
		await Events.bulkCreate(eventsApi);
		console.log('Data Base Uploaded');
	} catch (error) {
		console.log('Data Base NOT Uploaded');
		console.log('🐲🐲🐲 / file: Events.js / line 69 / error:\n', error.stack);
	}
};

module.exports = {
	getAllEvents,
	deleteEvent,
	createEvent,
	modifyEvent,
	getEventByName,
	getEventById,
	uploadDataBase,
};
