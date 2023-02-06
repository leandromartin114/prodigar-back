import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getItemtById } from '@/controllers/item'
import { stringToNumb } from '@/lib/helpers'
import { CORSMiddleware } from '@/lib/middlewares'

// Get the item information by id
async function getHandler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const query = req.query.itemId.toString()
		const itemId = stringToNumb(query)
		const itemData = await getItemtById(itemId)
		res.status(200).send(itemData)
	} catch (error) {
		res.status(400).send({ error: error })
	}
}

const handler = method({
	get: getHandler,
})

export default CORSMiddleware(handler)
