import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserData } from '@/controllers/user'
import { authMiddleware, CORSMiddleware } from '@/lib/middlewares'

// Get the profile user data
async function getHandler(req: NextApiRequest, res: NextApiResponse, token) {
	try {
		const data = getUserData(token.userId)
		res.status(200).send(data)
	} catch (error) {
		res.status(400).send({ message: 'error ' + error })
	}
}

// auth mid validation
const authHandler = authMiddleware(getHandler)

const handler = method({
	get: authHandler,
})

export default CORSMiddleware(handler)
