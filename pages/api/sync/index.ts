import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { sequelize } from '@/models/connection'
import 'models'
import { CORSMiddleware } from '@/lib/middlewares'

// Sync or reset the DB
async function getHandler(req: NextApiRequest, res: NextApiResponse) {
	try {
		sequelize.sync({ alter: true }).then((response) => {
			console.log(response)
		})
		res.status(200).send({ message: 'DB sync ok' })

		// use this for complete base reset with command yarn sync
		// sequelize.sync({ force: true }).then((res) => console.log(res))
	} catch (error) {
		res.status(400).send({ message: 'error: ' + error })
	}
}

const handler = method({
	get: getHandler,
})

export default CORSMiddleware(handler)
