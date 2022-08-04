const { Op } = require('sequelize');
const { map } = require('../app.js');
const { Events, Users, sequelize } = require('../db.js');

const getAllEvents = async (req, res, next) => {
	res.send(
		await Events.findAll({
			include: {
				model: Users
			},
			
			order: [['Date', 'ASC']],
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
		console.log(req.body)
		const created = await Events.create(req.body.event);
		const userToAdd = await Users.findOne({
			where: {Email: req.body.Email}
		})
		if(!userToAdd) {
			return res.status(400).send("This partner doesnt exist")
		}
		created.addUsers(userToAdd)
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
			include: {
				model: Users
			},
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


const updateEvent = async (req,res) => {
	let {id} = req.params
	let {data} = req.body
	console.log(req.body, id)
	try {

		if(req.body.data.Name) {

			let found = await Events.findOne({
				where: 
					data
				
			})

			if(found) {
				return res.status(400).send("This event name already Exist")
			}

		}
		let updated = await Events.update(
			
				data
			,
			{
				where: {
					ID: id,
				},
			}
		);
		console.log(updated);
		return res.send('Event Updated');
	} catch (error) {
		return res.status(400).send('Error');
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
	updateQuantity,
	updateEvent
};
