const express = require('express');
const routes = express.Router();
const { getUserByName }  = require('../Functions/Users');

/* aca van a entrar todas lar rutas que empiecen con: /support.    Entonces no hace falta repetirlo en cada ruta */

routes.get('/:idReceta', getSupportTickets);
routes.post('/:idReceta', getSupportTickets);
routes.put('/:idReceta', getSupportTickets);
routes.delete('/:idReceta', getSupportTickets);

module.export = routes;
