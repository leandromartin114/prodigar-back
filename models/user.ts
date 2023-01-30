import { DataTypes } from 'sequelize'
import { sequelize } from './connection'

export const User = sequelize.define('user', {
	fullName: DataTypes.STRING,
	email: DataTypes.STRING,
	address: DataTypes.STRING,
})
