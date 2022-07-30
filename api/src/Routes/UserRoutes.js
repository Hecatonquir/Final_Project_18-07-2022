/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */
const express = require('express');
const routes = express.Router();


const { getAllUsers,loginRequestAP, getUserByName, getUserById, deleteUser, getPartnerCreatedEvents, loginRequest, registerUser, validateToken, validateAdmin, registerUserGmail, roleChange,banUser, updateCart, } = require('../Functions/Users.js');

routes.get('/all', getAllUsers); // --------------------Working
routes.get('/name/:Name', getUserByName); // -----------Working
routes.put('/getUserById/:id', getUserById); //----------------- Working
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




routes.put('/changeRole', validateAdmin, roleChange);
routes.put('/banUnban', validateAdmin, banUser);


routes.put('/updateCart/:IdUser', updateCart);


routes.delete('/delete',validateAdmin, deleteUser); // ------------------Working

module.exports = routes;
