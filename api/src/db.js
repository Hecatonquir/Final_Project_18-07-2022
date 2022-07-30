require('dotenv').config();
const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const path = require('path');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

let sequelize =
	process.env.NODE_ENV === 'production'
		? new Sequelize({
				database: "d8d5okcd7rkull",
				dialect: 'postgres',
				host: "ec2-54-208-104-27.compute-1.amazonaws.com",
				port: 5432,
				username: "znensmsttkvxdb",
				password: "6c855cbb111a854ba706d5886b1c618efeca24ce5efbe794e6505d00d78b10c4",
				pool: {
					max: 3,
					min: 1,
					idle: 10000,
				},
				dialectOptions: {
					ssl: {
						require: true,
						rejectUnauthorized: false,
					},
					keepAlive: true,
				},
				ssl: true,
		  })
		: new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/Final_Project`, {
				logging: false,
				native: false,
		  });

const basename = path.basename(__filename);

const modelDefiners = [];

// Leemos todos los archivos de la carpeta Models, los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
	.filter((file) => file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js')
	.forEach((file) => {
		modelDefiners.push(require(path.join(__dirname, '/models', file)));
	});

// Injectamos la conexion (sequelize) a todos los modelos
modelDefiners.forEach((model) => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
	entry[0][0].toUpperCase() + entry[0].slice(1),
	entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Events, Users, Supports, Carts } = sequelize.models;

////// Associations //////
Users.belongsToMany(Events, { through: 'UsersxEvents', timestamps: false });
Events.belongsToMany(Users, { through: 'UsersxEvents', timestamps: false });

Users.hasOne(Carts);
Carts.belongsTo(Users);

Carts.hasMany(Events);
Events.belongsTo(Carts);

Users.belongsToMany(Supports, {through: "UserSupport"});
Supports.belongsToMany(Users, {through: "UserSupport"})

module.exports = {
	...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
	conn: sequelize, // para importart la conexión { conn } = require('./db.js');
	sequelize,
};
