/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */
const express = require('express');
const routes = express.Router();

const {
	getAllUsers,
	loginRequestAP,
	getUserByName,
	getUserById,
	deleteUser,
	getPartnerCreatedEvents,
	loginRequest,
	registerUser,
	validateToken,
	validateAdmin,
	registerUserGmail,
	roleChange,
	banUser,
	updateCart,
	updateHistory,
	updateUser,
	addToFavourite,
} = require('../Functions/Users.js');

routes.get('/all', getAllUsers); // --------------------Working
routes.get('/name/:Name', getUserByName); // -----------Working
routes.put('/getUserById/:id', getUserById); //---------Working   // al final queda con PUT ? si sale algun error, cambiar aqui.
routes.get('/partner/:ID', getPartnerCreatedEvents); // Working
routes.post('/admin', validateAdmin, (req, res) => {
	res.send('welcome');
});

routes.post('/register', registerUser);
routes.post('/login', loginRequest);
routes.post('/login2', loginRequestAP);
routes.post('/verify', validateToken, (req, res) => {
	res.send('Verified');
});

routes.post('/registerG', registerUserGmail);

routes.put('/changeRole', roleChange);
routes.put('/banUnban', banUser);
routes.put('/update/:id', updateUser);

routes.put('/updateCart/:IdUser', updateCart);
routes.put('/updateHistory/:userID', updateHistory);
//routes.put('/addToFavourite/:userID/:eventID', addToFavourite);

routes.delete('/delete', deleteUser); // ------------------Working

module.exports = routes;
