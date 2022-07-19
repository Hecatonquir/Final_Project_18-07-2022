/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */

const express = require('express');
const routes = express.Router();
const { getUserByName } = require('../Functions/Users');

routes.get('/', getUserByName);
routes.post('/', getUserByName);
routes.put('/', getUserByName);
routes.delete('/', getUserByName);

module.export = routes;
