const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
	sequelize.define('carts',
		{
			cartID: {
				type: DataTypes.UUID,
				primaryKey: true,
				defaultValue: DataTypes.UUIDV4,
			},
			date: {
				type: DataTypes.DATEONLY,
                allowNull: false
			},
            time: {
                type: DataTypes.TIME,
                allowNull: false
            }
		},
		{ timestamps: false }
	);
};

// tiene que estar conectado al evento con una relacion