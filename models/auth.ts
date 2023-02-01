import { DataTypes } from 'sequelize'
import { sequelize } from './connection'

export const Auth = sequelize.define('auth', {
	email: DataTypes.STRING,
	userId: DataTypes.INTEGER,
	code: DataTypes.INTEGER,
	expires: DataTypes.DATE,
})

// export class Auth extends Model {}

// Auth.init(
// 	{
// 		email: DataTypes.STRING,
// 		password: DataTypes.STRING,
// 		userId: DataTypes.INTEGER,
// 	},
// 	{ sequelize, modelName: "auth", freezeTableName: true, tableName: "auths" }
// );
