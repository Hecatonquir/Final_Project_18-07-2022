const express = require('express');
const routes = express.Router();

const UserRoutes = require('./UserRoutes');
const EventRoutes = require('./EventRoutes');
const SupportRoutes = require('./SupportRoutes');

routes.use(express.json);

routes.use('/user', UserRoutes);
routes.use('/event', EventRoutes);
routes.use('/support', SupportRoutes);

/* Aca pueden ir otras rutas que sólo se usen 1 vez */

module.exports = routes;
