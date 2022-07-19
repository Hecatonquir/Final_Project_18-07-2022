const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	// defino el modelo
	sequelize.define('supports',
		{
			supportID: {
				type: UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			reason: {
				type: DataTypes.TEXT,
                allowNull: false
			}
		},
		{ timestamps: false }
	);
};