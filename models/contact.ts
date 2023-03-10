import { DataTypes } from 'sequelize'
import { sequelize } from './connection'

export const Contact = sequelize.define('contact', {
	fullName: DataTypes.STRING,
	phoneNumber: DataTypes.BIGINT,
	email: DataTypes.STRING,
	message: DataTypes.STRING,
	itemId: DataTypes.INTEGER,
	itemTitle: DataTypes.STRING,
	itemEmail: DataTypes.STRING,
})
