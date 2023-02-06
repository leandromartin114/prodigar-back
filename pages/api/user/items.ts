import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getUserItems } from '@/controllers/user'
import { authMiddleware, CORSMiddleware } from '@/lib/middlewares'

// Get user's published items
async function getHandler(req: NextApiRequest, res: NextApiResponse, token) {
	try {
		const items = getUserItems(token.userId)
		res.status(200).send(items)
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
