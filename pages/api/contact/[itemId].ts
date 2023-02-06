import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { createContact } from '@/controllers/contact'
import { stringToNumb } from '@/lib/helpers'
import { CORSMiddleware, bodyMiddleware } from '@/lib/middlewares'
import { contactBodySchema } from '@/lib/schemas'

// Create a contact and send message to the item owner

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
	const query = req.query.itemId.toString()
	const itemId = stringToNumb(query)
	try {
		const newContact = createContact(itemId, req.body)
		res.status(200).send(newContact)
	} catch (error) {
		res.status(400).send({ message: 'error: ' + error })
	}
}

// validate the body with the schema
const verifiedPostHandler = bodyMiddleware(contactBodySchema, postHandler)

const handler = method({
	post: verifiedPostHandler,
})

export default CORSMiddleware(handler)
