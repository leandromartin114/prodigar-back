import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { updateItem } from '@/controllers/item'
import {
	bodyMiddleware,
	authMiddleware,
	CORSMiddleware,
} from '@/lib/middlewares'
import { itemBodySchema } from '@/lib/schemas'

// Update an item with all the validations
async function putHandler(req: NextApiRequest, res: NextApiResponse, token) {
	try {
		if (!token.userId) {
			res.status(401).send({ message: 'Unauthorized' })
		} else {
			const item = await updateItem(token.userId, req.body)
			res.status(200).send(item)
		}
	} catch (error) {
		res.status(400).send({ message: 'error: ' + error })
	}
}

// validate the body with the schema
const verifiedPostHandler = bodyMiddleware(itemBodySchema, putHandler)

// auth mid validation
const authPostHandler = authMiddleware(verifiedPostHandler)

const handler = method({
	put: authPostHandler,
})

export default CORSMiddleware(handler)
