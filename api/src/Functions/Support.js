const { Events, Users, Supports } = require('../db.js');

async function getSupportTickets(req, res, next) {
	res.send(await Supports.findAll());
	
}

const getSupportById = async (req, res) => {
	const ID = req.params;
	console.log(ID)
	console.log(req.body)
	try {
		const boxSupport = await Supports.update({
			done: req.body.data.isDone},
			{where: {
				supportID: ID.id}},
		);
		
		res.send(boxSupport);
	} catch (error) {
		console.log(error)
		res.status(400).send(error);
	}
};

const replyTicketByID = async (req, res) => {
	const {id} = req.params;
	
	console.log(req.body)
	try {
		const boxSupport = await Supports.update({
			reply: req.body.data},
			{where: {
				supportID: id}},
		);
		
		res.send(boxSupport);
	} catch (error) {
		console.log(error)
		res.status(400).send(error);
	}
};


const addSupportTicket = async (req, res) => {
	try {
		const userToTicket = await Users.findAll()
		const finalAdd = userToTicket.filter(el => el.Email === req.body.emailCustomer || el.Role === "Admin")

		const created = await Supports.create(req.body);

		let added = await created.addUser(finalAdd)
			let coco = await Users.findOne({where: {Role: "Admin" }, include:
				Supports
			})
			
		let test = await Users.findAll({where:{Role: "Admin"},include: Supports})

		console.log(test[0].supports)
		return res.send(added);
	} catch (error) {
		console.log(error)
		res.status(400).send("error")
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

module.exports = {
	getSupportTickets,
	/* getSupportByName2, */ getSupportById,
	addSupportTicket,
	deleteSupportTicket,
	replyTicketByID
};
