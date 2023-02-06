import { DataTypes } from 'sequelize'
import { sequelize } from './connection'

export const Item = sequelize.define('item', {
	fullName: DataTypes.STRING,
	title: DataTypes.STRING,
	description: DataTypes.STRING,
	imgURL: DataTypes.STRING,
	lat: DataTypes.FLOAT,
	lng: DataTypes.FLOAT,
	state: DataTypes.STRING,
	email: DataTypes.STRING,
	userId: DataTypes.INTEGER,
})
