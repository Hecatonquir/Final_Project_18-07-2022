const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define(
		'supports',
		{
			supportID: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			reason: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			
			problemType: {
				type: DataTypes.STRING,
				allowNull: false
			},

			emailCustomer: {
				type: DataTypes.STRING,
				allowNull: false
			},done: {
				type: DataTypes.BOOLEAN,
				defaultValue: false
			},
		},
		{ timestamps: false }
	);
};
