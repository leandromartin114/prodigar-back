import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { updateUser } from '@/controllers/user'
import {
	authMiddleware,
	CORSMiddleware,
	bodyMiddleware,
} from '@/lib/middlewares'
import { userBodySchema } from '@/lib/schemas'

// Update user data
async function putHandler(req: NextApiRequest, res: NextApiResponse, token) {
	try {
		const newUserData = await updateUser(token.userId, req.body)
		res.status(200).send(newUserData)
	} catch (error) {
		res.status(400).send({ message: 'error ' + error })
	}
}

// validate the body with the schema
const verifiedHandler = bodyMiddleware(userBodySchema, putHandler)

// auth mid validation
const authPutHandler = authMiddleware(verifiedHandler)

const handler = method({
	put: authPutHandler,
})

export default CORSMiddleware(handler)
