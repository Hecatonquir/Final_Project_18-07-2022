const express = require('express');
const routes = express.Router();
const { getSupportTickets, getSupportById, addSupportTicket, deleteSupportTicket } = require('../Functions/Support');

/* aca van a entrar todas lar rutas que empiecen con: /support.    Entonces no hace falta repetirlo en cada ruta */

routes.get('/all', getSupportTickets);
routes.get('/id/:ID', getSupportById);

routes.post('/createTicket', addSupportTicket);
// NOTA: ver de agregar una ruta de post que postee el mensaje de respuesta en una propiedad dentro del modelo de users

routes.delete('/:id', deleteSupportTicket);

module.exports = routes;
