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
async function postHandler(req: NextApiRequest, res: NextApiResponse, token) {
	try {
		const updatedData = updateUser(token.userId, req.body)
		res.status(200).send(updatedData)
	} catch (error) {
		res.status(400).send({ message: 'error ' + error })
	}
}

// validate the body with the schema
const verifiedHandler = bodyMiddleware(userBodySchema, postHandler)

// auth mid validation
const authPostHandler = authMiddleware(verifiedHandler)

const handler = method({
	post: authPostHandler,
})

export default CORSMiddleware(handler)
