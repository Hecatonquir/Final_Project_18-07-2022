const { Users } = require('../db.js');
require('dotenv').config();
const { Op } = require('sequelize');
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


// middleware

const validateToken = (req,res,next) => {
	const accessToken = req.cookies["access-token"]
	console.log(accessToken)
	if(!accessToken) return res.status(400).send("User is not authenticated")

	try {
		
	 
	const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY)
		
	if(validToken) {
		req.authenticated = true
		return next()
		
	}
	else{
		res.status(401).send("Invalid Token")
	}
	}catch (error) {
		res.status(400).json({error: "Session Expired, please Log in Again"})
		
	}
}

const validatePartner = (req,res,next) => {
	const accessToken = req.cookies["access-token"]
	
	if(!accessToken) return res.status(400).send("User is not authenticated")

	try {
		
	 
	const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY)
		
	if(validToken) {
		if(validToken.role == "Admin" || validToken.role === "Partner") {
		req.authenticated = true
		return next()
		}
		else{
			res.status(400).send("You can't access here")
		}
	}
	else{
		res.status(401).send("Invalid Token")
	}
	}catch (error) {
		res.status(400).json({error})
		
	}
}

const validateAdmin = (req,res,next) => {
	const accessToken = req.cookies["access-token"]
	
	if(!accessToken) return res.status(400).send("User is not authenticated")

	try {
		
	 
	const validToken = jwt.verify(accessToken, process.env.PRIVATEKEY)
		
	if(validToken) {
		if(validToken.role == "Admin") {
		req.authenticated = true
		return next()
		}
		else{
			res.status(400).send("You can't access here")
		}
	}
	else{
		res.status(401).send("Invalid Token")
	}
	}catch (error) {
		res.status(400).json({error})
		
	}
}

//////////////////////////////////////////////////////////////////////////////////
const getAllUsers = async (req, res, next) => {
	res.send(await Users.findAll());
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
		});
		res.send(userBox);
	} catch (error) {
		res.status(400).send(error.stack);
	}
};



const registerUser = async(req,res) =>{
	const {Username,Password} = req.body

	try {
		let foundOrCreate = await Users.findAll({
			where: {
				Username
			},
		});
			console.log(foundOrCreate)
		if(!foundOrCreate[0]) {
			bcrypt.hash(Password, 10).then(hash => {
				req.body.Password = hash
				 Users.create(req.body)
				 res.send("Created Succesfully")
			})
		}
		else{
			res.status(400).send("User already exist")
		}
		
	} catch (error) {
		res.status(400).send(error)
		
	}
}

const loginRequest = async(req,res) => {
	const {username, password} = req.body
	try {
		const user_ = await Users.findAll({
			where: {
				Username: username
			},
		});

		if(user_) {
			console.log(user_)
			bcrypt.compare(password, user_[0].Password, (error, response) => {
				if(response) {
					console.log(user_[0].ID)
					const id = user_[0].ID
				const token = jwt.sign({id: id, role:user_[0].Role, name: user_[0].Name},process.env.PRIVATEKEY,{
					expiresIn: 300,
				})
				console.log(token)
				res.cookie("access-token", token,{
					maxAge: 60*60*1000,
					httpOnly:false
				})

				res.send("Logged In!")
			} else{
				res.status(400).send("Wrong UserName/PassWord")
			}
				
			})
		}
		else{
			res.status(400).send("Not Found")
		}
		
	} catch (error) {
		res.status(400).send("User Doesn't exist");
	}
};



const deleteUser = async (req, res) => {
	try {
		const targetUser = await Users.findByPk(req.params.id);
		const userBox = targetUser;
		await targetUser.destroy();
		res.send(`User "${userBox.Name}" deleted successfully`);
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
}
