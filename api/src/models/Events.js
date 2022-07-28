const { DataTypes } = require('sequelize');

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'events',
		{
			ID: {
				type: DataTypes.UUID,
				defaultValue: DataTypes.UUIDV4,
			},
			Name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Image: {
				type: DataTypes.ARRAY(DataTypes.TEXT),
				allowNull: false,
			},
			Location: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Price: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			Quantity: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			Restrictions: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				defaultValue: ['None'],
			},
			Category: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			City: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			AgeRestriction: {
				type: DataTypes.STRING,
				defaultValue: '0',
			},
			RedFlags: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			Date: {
				type: DataTypes.DATE,
			},
			Detail: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			Carrousel: {
				type: DataTypes.STRING,
				defaultValue: null,
			},
		},
		{ timestamps: false }
	);
};
