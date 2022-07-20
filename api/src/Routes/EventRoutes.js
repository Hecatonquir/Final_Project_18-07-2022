/* aca van a entrar todas lar rutas que empiecen con: /event.    Entonces no hace falta repetirlo en cada ruta */

const express = require('express');
const routes = express.Router();
const { getAllEvents, deleteEvent, createEvent, modifyEvent } = require('../Functions/Events');

routes.get('/allEvents', getAllEvents);

routes.post('/', createEvent);

routes.put('/', modifyEvent);

routes.delete('/:id', deleteEvent);

routes.get('/', (req, res) => {
	console.log('Ejemplo2');
	res.send('Bienvenidos a la Los Eventos! ');
});

module.exports = routes;
