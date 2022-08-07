/* aca van a entrar todas lar rutas que empiecen con: /user.    Entonces no hace falta repetirlo en cada ruta */
const express = require('express');
const routes = express.Router();

const {
	getAllUsers,
	loginRequestAP,
	getUserByName,
	getUserById,
	getUserByID2,
	deleteUser,
	getPartnerCreatedEvents,
	loginRequest,
	registerUser,
	validateToken,
	validateAdmin,
    validatePartner,
	registerUserGmail,
	roleChange,
	banUser,
	updateCart,
	updateHistory,
	updateUser,
    get2fa
	
} = require('../Functions/Users.js');

routes.put('/all',validateAdmin, getAllUsers); // --------------------Working
routes.get('/name/:Name', getUserByName); // -----------Working
routes.put('/getUserById/:id', getUserById); //---------Working   // al final queda con PUT ? si sale algun error, cambiar aqui.
routes.get('/getUserByID2/:id', getUserByID2);
routes.get('/partner/:ID', getPartnerCreatedEvents); // Working
routes.post('/partner/validate', validatePartner, (req, res) => {
	res.send('Verified');
});
routes.post('/admin/validate', validateAdmin, (req, res) => {
	res.send('Verified');
})

routes.put('/get2fa', get2fa)
routes.post('/register', registerUser);
routes.post('/login', loginRequest);
routes.post('/login2', loginRequestAP);
routes.post('/verify', validateToken, (req, res) => {
	res.send('Verified');
});

routes.post('/registerG', registerUserGmail);

routes.put('/changeRole', validateAdmin, roleChange);
routes.put('/banUnban', validateAdmin,banUser);
routes.put('/update/:id', updateUser);

routes.put('/updateCart/:IdUser', updateCart);
routes.put('/updateHistory/:userID', updateHistory);
routes.put('/updateFavourite/:userID');

routes.delete('/delete', validateAdmin, deleteUser); // ------------------Working

module.exports = routes;
