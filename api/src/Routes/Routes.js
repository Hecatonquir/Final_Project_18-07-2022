const express = require('express');
const { Events, Users } = require('../db.js');

const routes = express.Router();

const U = require('../Functions/Users');
const E = require('../Functions/Events');
const T = require('../Functions/Tickets');

routes.use(express.json);

routes.get('/allEvents', async (req, res) => {
	res.send(await Events.findAll());
});

routes.delete('/event/:id', async (req, res)=>{
	try {
		const trash = await Events.findByPk(req.params.id)
		await trash.destroy()
		res.send('Event Deleted.')
	} catch (error) {
		res.status(404).send(error)
	}
})

module.exports = routes;
