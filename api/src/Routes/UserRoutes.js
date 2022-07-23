/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */
const express = require('express');
const routes = express.Router();

const { getAllUsers, getUserByName, getUserById, deleteUser, getPartnerCreatedEvents, loginRequest, registerUser, validateToken, validateAdmin } = require('../Functions/Users.js');

routes.get('/all', getAllUsers); // --------------------Working
routes.get('/name/:Name', getUserByName); // -----------Working
routes.get('/id/:ID', getUserById); //----------------- Working
routes.get('/partner/:ID', getPartnerCreatedEvents); // Working
routes.get("/admin", validateAdmin, (req,res) =>{ 
    res.send("welcome")
})

routes.post("/register",registerUser)
routes.post("/login", loginRequest)
routes.post("verify",validateToken, (req,res) => {
    res.send("Verified")
})


/* routes.put('/', getUserByName); */

routes.delete('/:id', deleteUser); // ------------------Working

module.exports = routes;