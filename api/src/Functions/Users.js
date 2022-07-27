require('dotenv').config();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const server = require('../app.js');

=======
const { Events, Users, Supports, Carts, sequelize } = require('../db.js');
>>>>>>> Development
=======
const { Events, Users, Supports, Carts, sequelize } = require('../db.js');
>>>>>>> Development

=======

const { Events, Users, Supports, Carts, sequelize } = require('../db.js');
>>>>>>> Development

// middleware

const validateToken = (req, res, next) => {
	const accessToken = req.cookies['access-token'];
	console.log(accessToken);
	if (!accessToken) return res.status(400).send('User is not authenticated');

	try {
		const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY);

		if (validToken) {
			req.authenticated = true;
			return next();
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
<<<<<<< HEAD

<<<<<<< HEAD
<<<<<<< HEAD
const validateAdmin = (req,res,next) => {
	
	const accessToken = req.cookies["access-token"]
	
	if(!accessToken) return res.status(400).send("User is not authenticated")
	try {
		
	 
	const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY)

	console.log("validToken")
		
	if(validToken) {
		if(validToken.role == "Admin") {
		req.authenticated = true
		
		 next()
		}
		else{
			return res.status(400).send("You can't access here")
		}
	}
	else{
		return res.status(401).send("Invalid Token")
	}
	}catch (error) {
		return res.status(400).json({error})
		
	}
}

//////////////////////////////////////////////////////////////////////////////////

const roleChange = async(req,res) => {
	console.log(req.body.data.email)

	try {
		let coco = await Users.update({
			Role: req.body.data.role},
			{where: {
				Email:req.body.data.email
			} }
		)
		console.log(coco)
		return res.send("Updated")
	}

	catch(error) {
		return res.status(400).send("an Error has ocurred")

	}


}


=======
=======
>>>>>>> Development
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

<<<<<<< HEAD
=======
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

>>>>>>> Development
=======
		console.log('validToken');

>>>>>>> Development
		if (validToken) {
			if (validToken.role == 'Admin') {
				req.authenticated = true;

				next();
			} else {
				return res.status(400).send("You can't access here");
			}
		}
<<<<<<< HEAD
	}
	catch(error) {
		return res.status(400).send("You can't access here")
	}
=======
	} catch (error) {
		res.status(400).json({ error });
	}
>>>>>>> b303f2bd155ad9b3ef043acba10972965f93c608
};

<<<<<<< HEAD
////////////////////////////////////////////////////////////////////////
<<<<<<< HEAD
>>>>>>> Development
=======
>>>>>>> Development
const getAllUsers = async (req, res, next) => {
=======
///////////////////////////////////////////////////////////////////////////////////
>>>>>>> Development

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
	const ID = req.params;
	try {
		const userBox = await Users.findAll({
			where: ID,
			include: {
				model: Carts,
				attributes: ['items'],
			},
		});
		res.send(userBox);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

const registerUser = async (req, res) => {
	const { Name, Username, Password, Email } = req.body;
	let reGex = /\S+@\S+\.\S+/;
	let validateEmail = reGex.test(Email);

	if (!Name || !Password) {
		res.status(400).send('Please Provide User and Password');
	} else if (!Username) {
		res.status(400).send('Please Provide an Username!!');
	} else if (!Email || !validateEmail) {
		res.status(400).send('Please Provide a VALID Email');
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
					res.send('Created Succesfully');
				});
			} else {
				res.status(400).send('User already exist');
			}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======

>>>>>>> Development
			console.log(user_)
			bcrypt.compare(password, user_[0].Password, (error, response) => {
				if(response) {
					console.log(user_[0].ID)
					const id = user_[0].ID
				const token = jwt.sign({id: id, role:user_[0].Role, name: user_[0].Name, email:user_[0].Email},process.env.PRIVATEKEY,{
					expiresIn: 9999,
				})
				console.log(token)
				res.cookie("access-token", token,{
					maxAge: 60*60*1000,
					httpOnly:false
				})

				return res.send("Logged In!")
			} else{
				return res.status(400).send("")
			}
				
			})
<<<<<<< HEAD
=======
		} catch (error) {
			res.status(400).send(error);
>>>>>>> Development
=======
		} catch (error) {
			res.status(400).send(error);
>>>>>>> Development
=======

		} catch (error) {
			res.status(400).send(error);
>>>>>>> Development
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
	try {
		const user_ = await Users.findAll({
			where: {
				Username: username,
			},
		});

		if (user_) {
			if (user_[0].Role === 'Partner' || user_[0].Role === 'Admin') {
				res.status(400).send('Invalid User/Password');
			}
			console.log(user_);
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
		console.log(req.body);
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
const addToCart = async (req, res) => {
	const { IdUser, IdEvento } = req.params;
	console.log('🐲🐲🐲 / file: Users.js / line 322 / IdUser', IdUser);

	/* 	Users.hasOne(Carts);
			Carts.belongsTo(Users);
		
			Carts.hasMany(Events);
			Events.belongsTo(Carts);	*/

	try {
		let emptyCart = await Carts.findAll({ where: { userID: IdUser } });
		let cart;
		var id;
		if (!emptyCart.length) {
			cart = await Carts.create({ userID: IdUser });
			cart.items = [IdEvento];
			await cart.save();
		} else {
			cart = await Carts.findAll({ userID: IdUser });
			id = cart[0].dataValues.ID;
			await Carts.update(
				{ items: sequelize.fn('array_append', sequelize.col('items'), IdEvento) },
				{ where: { ID: id } }
			);
		}
		res.send('Event added to User Cart');
	} catch (error) {
		res.status(400).send(error.stack);
	}
};

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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
	roleChange
}
=======
	addToCart,
};
>>>>>>> Development
=======
	addToCart,
};
>>>>>>> Development
=======
	roleChange,
	addToCart,
};

>>>>>>> Development
