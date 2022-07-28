const express = require('express');
const routes = express.Router();

const UserRoutes = require('./UserRoutes');
const EventRoutes = require('./EventRoutes');
const SupportRoutes = require('./SupportRoutes');

//routes.use(express.json); // Esto al parecer no se pone

routes.use('/user', UserRoutes);
routes.use('/event', EventRoutes);
routes.use('/support', SupportRoutes);

/* Aca pueden ir otras rutas que sólo se usen 1 vez. Por ejemplo: */

routes.get('/', (req, res) => {
	console.log('Ejemplo');
	res.send('Bienvenidos a la Homepage! (0-Routes.js) ');
});

module.exports = routes;
