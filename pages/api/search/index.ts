import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { getItemsNearBy } from '@/controllers/item'
import { CORSMiddleware } from '@/lib/middlewares'
import { stringToNumb } from '@/lib/helpers'

// Find items near your location
async function getHandler(req: NextApiRequest, res: NextApiResponse) {
	const queryLat = req.query.lat as string
	const queryLng = req.query.lng as string
	const lat = stringToNumb(queryLat)
	const lng = stringToNumb(queryLng)
	const location = { lat, lng }
	try {
		const items = await getItemsNearBy(location)
		res.status(200).send(items)
	} catch (error) {
		res.status(400).send({ message: 'error: ' + error })
	}
}

const handler = method({
	get: getHandler,
})

export default CORSMiddleware(handler)
