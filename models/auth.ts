import { DataTypes } from 'sequelize'
import { sequelize } from './connection'

export const Auth = sequelize.define('auth', {
	email: DataTypes.STRING,
	userId: DataTypes.INTEGER,
	code: DataTypes.INTEGER,
	expires: DataTypes.DATE,
})
