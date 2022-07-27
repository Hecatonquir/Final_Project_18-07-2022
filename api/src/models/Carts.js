const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define(
		'carts',
		{
			ID: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			items: {
				type: DataTypes.ARRAY(DataTypes.STRING),
				defaultValue: [],
			},
			/* date: {
				type: DataTypes.DATEONLY,
				allowNull: false,
			},
			time: {
				type: DataTypes.TIME,
				allowNull: false,
			}, */
		},
		{ timestamps: false }
	);
};

// tiene que estar conectado al evento con una relacion
