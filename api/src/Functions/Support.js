const { Events, Users, Supports } = require('../db.js');

async function getSupportTickets(req, res, next) {
	res.send(await Supports.findAll());
	
}

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

		console.log(test)
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
};
