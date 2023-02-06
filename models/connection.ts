import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
	dialect: 'postgres',
	username: process.env.NEXT_PUBLIC_SEQUELIZE_CREDS_USERNAME,
	password: process.env.NEXT_PUBLIC_SEQUELIZE_CREDS_PASSWORD,
	database: process.env.NEXT_PUBLIC_SEQUELIZE_CREDS_DATABASE,
	port: 5432,
	host: process.env.NEXT_PUBLIC_SEQUELIZE_CREDS_HOST,
	ssl: true,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
})
sequelize.authenticate()
