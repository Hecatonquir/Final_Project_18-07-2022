const { Events, Users } = require('../db.js');

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

module.exports = { getAllEvents, deleteEvent, createEvent, modifyEvent };
