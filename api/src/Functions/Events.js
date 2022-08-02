const { Op } = require('sequelize');
const { map } = require('../app.js');
const { Events, Users, sequelize } = require('../db.js');

const getAllEvents = async (req, res, next) => {
	res.send(
		await Events.findAll({
			attributes: {
				/* include: [
					[sequelize.fn('TO_CHAR', sequelize.col('Date'), 'Day DD-Mon-YYYY HH:MM'),'Date'],
				], */
			},
		})
	);
};

const deleteEvent = async (req, res) => {
	console.log(req.body.data.ID);
	try {
		const trash = await Events.findOne({
			where: {
				ID: req.body.data.ID,
			},
		});
		console.log(trash);
		const trash2 = trash;
		await trash.update({ isErased: req.body.data.veredict });
		res.send(`Event ${trash2.Name} deleted successfully`);
	} catch (error) {
		res.status(404).send(error.stack);
	}
};

const createEvent = async (req, res) => {
	try {
		const created = await Events.create(req.body);
		/* created.addUsers( {where: {ID: req.body.ID}} ) */ /////PENDING////
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
			attributes: {
				include: [
					[sequelize.fn('TO_CHAR', sequelize.col('Date'), 'Day DD-Mon-YYYY HH12:MIPM'), 'Date'],
				],
			},
		});
		res.send(found);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const reportEvent = async (req, res) => {
	try {
		const e = await Events.findByPk(req.params.ID);
		e.RedFlags++;
		await e.save();
		res.send('RedFlags++');
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const getReported = async (req, res) => {
	try {
		const reportedEvents = await Events.findAll({
			where: {
				RedFlags: { [Op.gt]: 2 },
			},
		});
		res.send(reportedEvents);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const updateQuantity = async (req, res) => {
	const { ID, newStock } = req.body
	try {
		await Events.update( {
			Quantity: newStock,
		},
		{
			where: {
				ID: ID,
			},
		})
		return res.send('Stock updated')
	}catch(error) {
		console.log(error.stack)
		return res.status(400).send('Something went wrong')
	}
};

module.exports = {
	getAllEvents,
	deleteEvent,
	createEvent,
	modifyEvent,
	getEventByName,
	getEventById,
	reportEvent,
	getReported,
	updateQuantity
};
