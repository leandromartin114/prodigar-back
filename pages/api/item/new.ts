import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createItem } from '@/controllers/item'
import {
	bodyMiddleware,
	authMiddleware,
	CORSMiddleware,
} from '@/lib/middlewares'
import { itemBodySchema } from '@/lib/schemas'

// Create a new item with all the validations
async function postHandler(req: NextApiRequest, res: NextApiResponse, token) {
	try {
		if (!token.userId) {
			res.status(401).send({ message: 'Unauthorized' })
		} else {
			const newItem = await createItem(token.userId, req.body)
			res.status(200).send(newItem)
		}
	} catch (error) {
		res.status(400).send({ message: 'error: ' + error })
	}
}

// validate the body with the schema
const verifiedPostHandler = bodyMiddleware(itemBodySchema, postHandler)

// auth mid validation
const authPostHandler = authMiddleware(verifiedPostHandler)

const handler = method({
	post: authPostHandler,
})

export default CORSMiddleware(handler)
