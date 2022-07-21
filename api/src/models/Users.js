const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'users',
		{
			ID: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			Name: {
				type: DataTypes.STRING,
				defaultValue: 'Guest',
			},
			LoggedIn: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			Email: {
				type: DataTypes.STRING,
				isUnique: true,
				validate: {
					isEmail: true,
				},
			},
			Image: {
				type: DataTypes.TEXT,
			},
			Location: {
				type: DataTypes.STRING,
			},
			Role: {
				type: DataTypes.ENUM('Guest', 'User', 'Partner', 'Admin'),
				allowNull: true,
			},
			Favourites: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			Cart: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			CreatedEvents: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			RedFlags: {
				type: DataTypes.INTEGER,
			},
		},
		{ timestamps: false }
	);
};
