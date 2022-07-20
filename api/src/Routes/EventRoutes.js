/* aca van a entrar todas lar rutas que empiecen con: /event.    Entonces no hace falta repetirlo en cada ruta */

const express = require('express');
const routes = express.Router();
/* const {
	getAllEvents,
	deleteEvent,
	createEvent,
	modifyEvent,
	getEventByName,
} = require('../Functions/Events'); */

/* LO QUE ESTÁ ARRIBA ES LO MISMO QUE LO DE ABAJO, Sólo que cuando hay muchas funciones, conviene traerte todas las funciones juntas directamente como hice abajo y luego usarlas así: */
const F = require('../Functions/Events');

routes.get('/allEvents', F.getAllEvents);
routes.get('/:Name', F.getEventByName);

routes.post('/', F.createEvent);

routes.put('/', F.modifyEvent);

routes.delete('/:id', F.deleteEvent);

routes.get('/', (req, res) => {
	console.log('Ejemplo2');
	res.send('Bienvenidos a la Los Eventos! ');
});

module.exports = routes;
