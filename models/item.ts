import { DataTypes } from 'sequelize'
import { sequelize } from './connection'

export const Item = sequelize.define('item', {
	title: DataTypes.STRING,
	description: DataTypes.STRING,
	imgURL: DataTypes.STRING,
	location: DataTypes.STRING,
	lat: DataTypes.FLOAT,
	lng: DataTypes.FLOAT,
	state: DataTypes.STRING,
	email: DataTypes.STRING,
	userId: DataTypes.INTEGER,
})
