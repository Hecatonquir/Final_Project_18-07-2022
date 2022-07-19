const express = require('express');

const routes = express.Router();

const U = require('../Functions/Users');
const E = require('../Functions/Events');
const T = require('../Functions/Tickets');

routes.use(express.json);

/* Lo ideal sería hacer que haya una única ruta users y de ahi escribamos todos las sub rutas de users (lo mismo con las demás) */

routes.get('/users', F.getUserByName);
routes.post('/users', getUserByName);
routes.put('/users', getUserByName);
routes.delete('/users', getUserByName);

routes.get('/events', getEventByName);
routes.post('/events', newRecipe);
routes.put('/events', newRecipe);
routes.delete('/events', newRecipe);

routes.get('/support/:idReceta', getSupportTickets);
routes.post('/support/:idReceta', getSupportTickets);
routes.put('/support/:idReceta', getSupportTickets);
routes.delete('/support/:idReceta', getSupportTickets);

/* Esto es para llamar todos los eventos apenas abro la Web App */
routes.get('/allEvents', async (req, res, next) => {
	let allEvents = await getAllEvents();
	res.send(allEvents);
});

module.exports = routes;
