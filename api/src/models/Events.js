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
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			Name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Image: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Location: {
				type: DataTypes.STRING,
			},
			Category: {
				type: DataTypes.ARRAY(DataTypes.STRING),
			},
			City: {
				type: DataTypes.STRING,
			},
			AgeRestriction: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			RedFlags: {
				type: DataTypes.INTEGER,
			},
		},
		{ timestamps: false }
	);
};
