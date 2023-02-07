import * as pg from 'pg'
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize({
	dialect: 'postgres',
	dialectModule: pg,
	username: process.env.SEQUELIZE_CREDS_USERNAME,
	password: process.env.SEQUELIZE_CREDS_PASSWORD,
	database: process.env.SEQUELIZE_CREDS_DATABASE,
	port: 5432,
	host: process.env.SEQUELIZE_CREDS_HOST,
	ssl: true,
	dialectOptions: {
		ssl: {
			require: true,
			rejectUnauthorized: false,
		},
	},
})
sequelize.authenticate()
