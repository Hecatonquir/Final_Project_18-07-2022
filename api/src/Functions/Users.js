require('dotenv').config();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Events, Users, Supports, Carts, sequelize } = require('../db.js');
//const nodemailer = require('nodemailer') // nodemailer y google api en caso de poder implementarlas
//const { google } = require('googleapis')

const validateToken = (req, res, next) => {
	const accessToken = req.cookies['access-token'];
	console.log(accessToken);
	if (!accessToken) return res.status(400).send('User is not authenticated');
	try {
		const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY);
		if (validToken) {
			req.authenticated = true;
			return next()
		} else {
			res.status(401).send('Invalid Token');
		}
	} catch (error) {
		res.status(400).json({ error: 'Session Expired, please Log in Again' });
	}
};

const validatePartner = (req, res, next) => {
	const accessToken = req.cookies['access-token'];
	if (!accessToken) return res.status(400).send('User is not authenticated');
	try {
		const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY);
		if (validToken) {
			if (validToken.role == 'Admin' || validToken.role === 'Partner') {
				req.authenticated = true;
				return next();
			} else {
				res.status(400).send("You can't access here");
			}
		} else {
			res.status(401).send('Invalid Token');
		}
	} catch (error) {
		res.status(400).json({ error });
	}
};

const validateAdmin = (req, res, next) => {
	const accessToken = req.cookies['access-token'];
	if (!accessToken) return res.status(400).send('User is not authenticated');
	try {
		const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY);
		console.log('validToken');
		if (validToken) {
			if (validToken.role == 'Admin') {
				req.authenticated = true;
				next();
			} else {
				return res.status(400).send("You can't access here");
			}
		}
	} catch (error) {
		res.status(400).json({ error });
	}
};

///////////////////////////////////////////////////////////////////////////////////

const roleChange = async (req, res) => {
	console.log(req.body.data.email);
	try {
		let coco = await Users.update(
			{
				Role: req.body.data.role,
			},
			{
				where: {
					Email: req.body.data.email,
				},
			}
		);
		console.log(coco);
		return res.send('Updated');
	} catch (error) {
		return res.status(400).send('an Error has ocurred');
	}
};

const getAllUsers = async (req, res, next) => {
	res.send(
		await Users.findAll({
			include: {
				model: Supports,
			},
		})
	);
};

const getUserByName = async (req, res) => {
	const { Name } = req.params;
	try {
		const usersBox = await Users.findAll({
			where: {
				Name: {
					[Op.iLike]: '%' + Name + '%',
				},
			},
			include: {
				model: Supports,
			},
		});
		res.send(usersBox);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const getUserById = async (req, res) => {

	let ID = req.params.id
	try {
		const userBox = await Users.findOne({
			where:{ 
				ID,},
			include: [{
				model: Supports,
			},
			{model: Carts}], 
			attributes: {exclude:["Password"]}
		});
		res.send(userBox);
	} catch (error) {
		console.log(error)
		res.status(400).send(error.stack);
	}
};

const registerUser = async (req, res) => {
	const { Name, Username, Password, Email } = req.body; // revisar location e image para mailing

	//////////////////////////////////////// Usar en caso de RESOLVER implementacion nodemailer & Google Api //////////////////////////////
	//////////////////////////////////////// Por movivo desconocido no funciona ///////////////////////////////////////////////////////////
	/* const contentHTML = `
		<h1>Mainstage account has been created successfully!</h1>
		<ul>
			<li>Name: ${Name}</li>
			<li>Username: ${Username}</li>
			<li>Email: ${Email}</li>
		</ul>
		<p>Please keep your password safe, we do not save it.</p>
		<p>All your favorite artists are waiting for you at Mainstage.com, get your tickets soon!</p>
		<h3>Mainstage Devs Team</h3>
		<h5>Powered by Henry</h5> `

	const CLIENT_ID = '502989553254-ngudomctts93nnmle74tpl90mn3lin9j.apps.googleusercontent.com'
	const CLIENT_SECRET = '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'
	const REDIRECT_URI = 'https://developers.google.com/oauthplayground'
	const REFRESH_TOKEN = '1//04IiW5YLcPpfqCgYIARAAGAQSNwF-L9Ir3OyC3qZ42NlvXiQrwcrwhifxYB37Y7PaLe3hl58dqIcNfNBpDx6mL3e6U-iuhCOVK90'
	const oAuth2Client = new google.auth.OAuth2( CLIENT_ID, CLIENT_SECRET, REDIRECT_URI );
	oAuth2Client.setCredentials( {refresh_token: REFRESH_TOKEN} )

	async function sendMail(){
		try {
			const accessToken = await oAuth2Client.getAccessToken()
			const transporter = nodemailer.createTransport( {	service: 'gmail',
																host: 'smtp.gmail.com',
															  	auth: { type: 'OAuth2',
																	  user: 'mainstage.project@gmail.com',
																	  pass: 'Mainstageproyect',
																	  clientId: CLIENT_ID,
																	  clientSecret: CLIENT_SECRET,
																	  refreshToken: REFRESH_TOKEN,
																	  accessToken: accessToken  }
															} )  */
			
			/* let transporter = nodemailer.createTransport({
				host: "smtp.gmail.com",
				port: 465,
				secure: true, // true for 465, false for other ports
				auth: {
				  user: 'mainstage.project@gmail.com', 
				  pass: 'ztjqezdqjysiwoew', 
				},
			  }); */
			  /* const transporter = nodemailer.createTransport({
				host: '127.0.0.1',
				port: 2525,
				auth: {
					user: 'Mainstage_project',
					pass: '<4bcefac33598c623f4f39b547dc0696fded72fffa6a1f5ec3503085311e0f1e0>'
				}
			}); */

			/* const mailOptions = {
				from: 'Mainstage Team <mainstage.project@gmail.com>',
				to: `${Email}`,
				subject: 'Mainstage account confirmed',
				html: contentHTML
			}

			const result = await transporter.sendMail(mailOptions)
			return result
		}catch(error) {
			console.log(error)
		}
	}	

	sendMail()
		.then((result) => console.log(result))
		.catch((error) => console.log(error.message)); */
    ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


	let reGex = /\S+@\S+\.\S+/;
	let validateEmail = reGex.test(Email);
	if (!Name || !Password) {
		return res.status(400).send('Please Provide User and Password');
	} else if (!Username) {
		return res.status(400).send('Please Provide an Username!!');
	} else if (!Email || !validateEmail) {
		return res.status(400).send('Please Provide a VALID Email');
	} else {

		try {
			let foundOrCreate = await Users.findAll({
				where: {
					Username,
				},
			});
			console.log(foundOrCreate);
			if (!foundOrCreate[0]) {
				bcrypt.hash(Password, 10).then((hash) => {
					req.body.Password = hash;
					req.body.Role = 'User';
					Users.create(req.body);
					return res.send('Created Succesfully');
				});
			} else {
				return res.status(400).send('User already exist');
			}
		} catch (error) {
			res.status(400).send(error);
		}
	}
};

const registerUserGmail = async (req, res) => {
	const { Username } = req.body;
	try {
		let foundOrCreate = await Users.findAll({
			where: {
				Username,
			},
		});
		console.log(foundOrCreate);
		if (!foundOrCreate[0]) {
			bcrypt.hash(process.env.DefaultPassword, 10).then(async (hash) => {
				req.body.Password = hash;
				req.body.Role = 'User';
				let gmailUser = await Users.create(req.body);
				const token = jwt.sign(
					{
						id: gmailUser.ID,
						role: gmailUser.Role,
						name: gmailUser.Name,
						email: gmailUser.Email,
						picture: gmailUser.Image,
					},
					process.env.PRIVATEKEY,
					{
						expiresIn: 300,
					}
				);
				console.log(token);
				res.cookie('access-token', token, {
					maxAge: 60 * 60 * 1000,
					httpOnly: false,
				});
				res.send('Created');
			});
		} else {
			const tokenRegistered = jwt.sign(
				{
					id: foundOrCreate[0].ID,
					role: foundOrCreate[0].Role,
					name: foundOrCreate[0].Name,
					email: foundOrCreate[0].Email,
					picture: foundOrCreate[0].Image,
				},
				process.env.PRIVATEKEY,
				{
					expiresIn: 300,
				}
			);
			console.log(tokenRegistered);
			res.cookie('access-token', tokenRegistered, {
				maxAge: 60 * 60 * 1000,
				httpOnly: false,
			});
			res.send('Loged In!');
		}
	} catch (error) {
		res.status(400).send(error);
	}
};

const loginRequest = async (req, res) => {
	const { username, password } = req.body;
	console.log(username)
	try {
		const user_ = await Users.findAll({
			where: {
				Username: username,
			},
		});
		if(user_[0].isBan) {			
			return res.status(400).send("This account has been banned")
		}
		if (user_[0]) {
			if (user_[0].Role === 'Admin') {
				return res.status(400).send('Invalid User/Password');
			}

			bcrypt.compare(password, user_[0].Password, (error, response) => {
				if (response) {
					
					
					
					const token = jwt.sign(
						{ id: id, role: user_[0].Role, name: user_[0].Name, email: user_[0].Email,picture: user_[0].Image },
						process.env.PRIVATEKEY, 
						{
							expiresIn: 9999,
						}
					);
					
					res.cookie('access-token', token, {
						maxAge: 60 * 60 * 1000,
						httpOnly: false,
					});

					return res.send(user_);
				} else {
					return res.status(400).send('');
				}
			});
		}
	} catch (error) {
		return res.status(400).send('Username or Password invalid');
	}
};

const loginRequestAP = async (req, res) => {
	const { username, password } = req.body;
	try {
		const user_ = await Users.findAll({
			where: {
				Username: username,
			},
		});
		if (user_) {
			if (user_[0].Role === 'User') {
				return res.status(400).send('Not Allowed');
			}
			bcrypt.compare(password, user_[0].Password, (error, response) => {
				if (response) {
					console.log(user_[0].ID);
					const id = user_[0].ID;
					const token = jwt.sign(
						{ id: id, role: user_[0].Role, name: user_[0].Name, email: user_[0].Email },
						process.env.PRIVATEKEY,
						{
							expiresIn: 9999,
						}
					);
					console.log(token);
					res.cookie('access-token', token, {
						maxAge: 60 * 60 * 1000,
						httpOnly: false,
					});

					return res.send('Logged In!');
				} else {
					return res.status(400).send('No');
				}
			});
		} else {
			return res.status(400).send('');
		}
	} catch (error) {
		return res.status(400).send("User Doesn't exist");
	}
};

const deleteUser = async (req, res) => {
	try {

		console.log("hola");
		const targetUser = await Users.findOne({
			where: {
				Email: req.body.email,
			},
		});
		console.log(targetUser);
		await targetUser.destroy();
		console.log(targetUser);
		return res.send(`User Deleted`);
	} catch (error) {
		res.status(404).send(error.stack);
	}
};

const getPartnerCreatedEvents = async (req, res) => {
	const { ID } = req.params;
	try {
		const Partner = await Users.findByPk(ID);
		const allPartnerEvents = Partner.CreatedEvents;
		res.send(allPartnerEvents);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const updateCart = async (req, res) => {
	const { IdUser/*, idEvento*/ } = req.params;

	
	try {
		// let emptyCart = await Carts.findAll({ where: { userID: IdUser } });
		// let cart;		
		// var id;
		// if (!emptyCart.length) {
		// 	cart = await Carts.create({ userID: IdUser });
		// 	cart.items = [IdEvento];
		// 	await cart.save();
		// } else {
		// 	cart = await Carts.findAll({ userID: IdUser });
		// 	id = cart[0].dataValues.ID;
		// 	await Carts.update(
		// 		{ items: sequelize.fn('array_append', sequelize.col('items'), IdEvento) },
		// 		{ where: { ID: id } }
		// 	);
		// }
		// res.send('Event added to User Cart');
		console.log(console.log(req.body))
		let user = await Users.findByPk(IdUser)
			
			console.log(user)
		user.Cart = [...user.Cart, ...req.body]
		user.save()
    res.send('Event added to User Cart');
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const banUser = async (req,res) => {
	console.log(req.body.data)
	try {
	let banned = await Users.update({
		isBan: req.body.data.ban},
		{
		where: {
			Email: req.body.data.email}
		},
		)
		console.log(banned)
		return res.send("User Banned")
	}catch (error) {
		return res.status(400).send("Error")
	}
}

module.exports = {
	getAllUsers,
	getUserByName,
	getUserById,
	deleteUser,
	getPartnerCreatedEvents,
	loginRequest,
	registerUser,
	validateToken,
	validatePartner,
	validateAdmin,
	registerUserGmail,
	loginRequestAP,
	updateCart,
	roleChange,	
	banUser
};

