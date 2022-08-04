const { BOOLEAN } = require('sequelize');
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
			InitialQtty: {
				/* Significa Initial Quantity. Está para ver si se agotaron las entradas o si e el evento siempre tuvo Entradas = 0 (que significa que no requería entradas al crearlo) */
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			Restrictions: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				defaultValue: [],
			},
			AgeRestriction: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			Category: {
				type: DataTypes.STRING,
			},
			City: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			RedFlags: {
				type: DataTypes.INTEGER,
				defaultValue: 0,
			},
			Date: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			Detail: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			Carrousel: {
				type: DataTypes.STRING,
				defaultValue: null,
			},
			isErased: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},

			isLive:  {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			
			Coords: {
				type: DataTypes.ARRAY(DataTypes.DOUBLE)
			}
		},
		{ timestamps: false }
	);
};
