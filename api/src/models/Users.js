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
				allowNull: true,
			},
			Password: {
				type: DataTypes.STRING,
				defaultValue: "MainStagePartner",
			},

			Token: {
				type: DataTypes.STRING,
				allowNull: true,
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
				type: DataTypes.ARRAY(DataTypes.JSONB),
				defaultValue: [],
			},
			shoppingHistory: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				defaultValue: [],
			},
			CreatedEvents: {
				type: DataTypes.ARRAY(DataTypes.JSONB),
				defaultValue: [],
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
				defaultValue: [],
			},
			isSupport: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
			isBan: {
				type: DataTypes.BOOLEAN,
				defaultValue: false,
			},
				isPartner: {
					type: DataTypes.BOOLEAN,
					defaultValue: false,
	
			},

			CBU: {
				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			},

			DNI: {
				type: DataTypes.STRING,
				defaultValue: "",
				allowNull: true
			},

			Company: {

				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			},

			Address: {

				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			},

			Phone: {
				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			
			
			},

			CUIT: {
				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			
			},

			LastName: {
				type: DataTypes.STRING,
				defaultValue: '',
				allowNull: true
			},
			
		},
		{ timestamps: false }
	);
};
