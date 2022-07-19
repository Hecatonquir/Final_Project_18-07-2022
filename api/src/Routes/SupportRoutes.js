const express = require('express');
const routes = express.Router();
const { getSupportTickets } = require('../Functions/Support');

/* aca van a entrar todas lar rutas que empiecen con: /support.    Entonces no hace falta repetirlo en cada ruta */

routes.get('/:idReceta', getSupportTickets);
routes.post('/:idReceta', getSupportTickets);
routes.put('/:idReceta', getSupportTickets);
routes.delete('/:idReceta', getSupportTickets);

module.exports = routes;
