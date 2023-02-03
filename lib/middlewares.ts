import type { NextApiRequest, NextApiResponse } from 'next'
import parseBearerToken from 'parse-bearer-token'
import { decodeToken } from './jwt'
import * as yup from 'yup'
import NextCors from 'nextjs-cors'

// mid for auth with token
export function authMiddleware(callback: (a: any, b: any, c: any) => any) {
	return function (req: NextApiRequest, res: NextApiResponse) {
		const token = parseBearerToken(req)
		if (!token) {
			res.status(401).send({ message: 'No token' })
		}
		const decodedToken = decodeToken(token as string)
		if (decodedToken) {
			callback(req, res, decodedToken)
		} else {
			res.status(401).send({ message: 'Wrong token' })
		}
	}
}

// mid for validate the correct body format in the request
export function bodyMiddleware(
	bodySchema: yup.AnySchema,
	callback: (a: any, b: any, c: any) => any
) {
	return async function (
		req: NextApiRequest,
		res: NextApiResponse,
		token?: string
	) {
		try {
			const validateOK = await bodySchema.validate(req.body)
			if (validateOK) {
				callback(req, res, token)
			}
		} catch (error) {
			res.status(422).send({ field: 'body', message: error })
		}
	}
}

// mid for validate the correct body and query format in the request
export function queryAndBodyMid(
	querySchema: any,
	bodySchema: yup.AnySchema,
	callback: (a: any, b: any, c: string) => any
) {
	return async function (
		req: NextApiRequest,
		res: NextApiResponse,
		token: string
	) {
		try {
			let query
			if (req.query.itemId) {
				query = req.query.itemId
			}
			const validateQueryOK = await querySchema.validate(query)
			const validateBodyOK = await bodySchema.validate(req.body)
			if (validateQueryOK && validateBodyOK) {
				callback(req, res, token)
			}
		} catch (error) {
			res.status(422).send({ field: 'query or body', message: error })
		}
	}
}

// CORS mid
export function CORSMiddleware(callback: (a: any, b: any) => any) {
	return async function (req: NextApiRequest, res: NextApiResponse) {
		await NextCors(req, res, {
			methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
			origin: '*',
			optionsSuccessStatus: 200,
		})
		callback(req, res)
	}
}
