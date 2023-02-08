import jwt from 'jsonwebtoken'
import * as dotenv from 'dotenv'
dotenv.config()

export function generateToken(obj: any) {
	const token = jwt.sign(obj, process.env.JWT_SECRET as string)
	return token
}

export function decodeToken(token: string) {
	try {
		return jwt.verify(token, process.env.JWT_SECRET as string)
	} catch (error) {
		console.error('token incorrecto')
		return error
	}
}
