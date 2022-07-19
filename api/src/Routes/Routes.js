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

module.exports = routes;
