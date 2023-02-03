import jwt from 'jsonwebtoken'

export function generateToken(obj: any) {
	const token = jwt.sign(obj, process.env.NEXT_PUBLIC_JWT_SECRET as string)
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
