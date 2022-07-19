const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('users',
		{
			supportID: {
				type: UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			reason: {
				type: DataTypes.TEXT,
				defaultValue: 'Guest',
			},
			LoggedIn: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
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