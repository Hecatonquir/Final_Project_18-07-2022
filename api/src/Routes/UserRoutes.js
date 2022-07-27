/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */
const express = require('express');
const routes = express.Router();

<<<<<<< HEAD
const { getAllUsers,loginRequestAP, getUserByName, getUserById, deleteUser, getPartnerCreatedEvents, loginRequest, registerUser, validateToken, validateAdmin, registerUserGmail, roleChange } = require('../Functions/Users.js');
=======
const { getAllUsers,loginRequestAP, getUserByName, getUserById, deleteUser, getPartnerCreatedEvents, loginRequest, registerUser, validateToken, validateAdmin, registerUserGmail,addToCart } = require('../Functions/Users.js');
>>>>>>> Development

routes.get('/all', getAllUsers); // --------------------Working
routes.get('/name/:Name', getUserByName); // -----------Working
routes.get('/id/:ID', getUserById); //----------------- Working
routes.get('/partner/:ID', getPartnerCreatedEvents); // Working
routes.get("/admin", validateAdmin, (req,res) =>{ 
    res.send("welcome")
})

routes.post("/register",registerUser)
routes.post("/login", loginRequest)
routes.post("/login2", loginRequestAP)
routes.post("/verify",validateToken, (req,res) => {
    res.send("Verified")
    
})

routes.post("/registerG", registerUserGmail)


<<<<<<< HEAD

routes.put('/changeRole', validateAdmin, roleChange);
=======
routes.put('/addtocart/:IdUser/:IdEvento', addToCart);
>>>>>>> Development

routes.delete('/delete', deleteUser); // ------------------Working

module.exports = routes;