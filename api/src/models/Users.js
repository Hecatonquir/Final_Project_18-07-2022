const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el model
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
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
			Username: {
				type: DataTypes.STRING,
				isUnique: true,
				allowNull: false,
			},
			Password: {
				type: DataTypes.STRING,
				allowNull: false,
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
			City: {
				type: DataTypes.STRING,
			},
			Location: {
				type: DataTypes.STRING,
			},
			Role: {
				type: DataTypes.STRING,
				defaultValue: 'Guest',
			},
			Favourites: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			shoppingHistory: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			CreatedEvents: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			RedFlags: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			LoggedIn: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			Cart: {
				type: DataTypes.ARRAY(DataTypes.JSON),
				defaultValue: [{}],
			},
			isSupport: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			isBan: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
		},
		{ timestamps: false }
	);
};
