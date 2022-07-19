const { Events, Users } = require('../db.js');

const getAllEvents = async (req, res, next) => {
	let allEvents = await getAllEvents();
	res.send(allEvents);
	routes.get('/allEvents', async (req, res) => {
		res.send(await Events.findAll());
	});
};

const deleteEvent = async (req, res) => {
	try {
		const trash = await Events.findByPk(req.params.id);
		await trash.destroy();
		res.send('Event Deleted.');
	} catch (error) {
		res.status(404).send(error);
	}
};

const createEvent = async (req, res) => {
	try {
		const created = await Events.create(req.body);
		res.send(created);
	} catch (error) {
		res.status(400).send(error);
	}
};
const modifyEvent = async (req, res, next) => {
	return 'hola';
};

module.exports = { getAllEvents, deleteEvent, createEvent, modifyEvent };
