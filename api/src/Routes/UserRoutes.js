/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */

const express = require('express');
const routes = express.Router();
const { getAllUsers, getUserByName, getUserById, addUser, deleteUser } = require('../Functions/Users.js');

routes.get('/all', getAllUsers);
routes.get('/name/:Name', getUserByName);
routes.get('/id/:ID', getUserById);
routes.post('/', addUser);
/* routes.put('/', getUserByName); */
routes.delete('/', deleteUser);

module.exports = routes;
