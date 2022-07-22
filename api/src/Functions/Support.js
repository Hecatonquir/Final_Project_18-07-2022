const { Events, Users, Supports } = require('../db.js');

async function getSupportTickets(req, res, next) {
	res.send(await Supports.findAll());
	//return 'hola';
}
/* const getSupportByName2 = async (req, res, next) => {
	return 'hola';
}; */

const getSupportById = async (req, res) => {
	const ID = req.params;
		try {
			const boxSupport = await Supports.findAll({
				where: ID,
			});
			res.send(boxSupport);
		} catch (error) {
			res.status(400).send(error.stack);
		}
	
}

const addSupportTicket = async (req, res) => {
	try {
		const created = await Supports.create(req.body);
		/* created.addUsers( {where: {ID: req.body.ID}} ) */  /////PENDING////
		res.send(created);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const deleteSupportTicket = async (req, res) => {
	try {
		const ticketToDelete = await Supports.findByPk(req.params.id);
		const ticket = ticketToDelete;
		await ticketToDelete.destroy();
		res.send(`Support Ticket ID: "${ticket.supportID}" deleted successfully`);
	} catch (error) {
		res.status(404).send(error.stack);
	}
};

module.exports = { getSupportTickets, /* getSupportByName2, */ getSupportById, addSupportTicket, deleteSupportTicket};
