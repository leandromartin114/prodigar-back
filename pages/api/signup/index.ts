import method from 'micro-method-router'
import type { NextApiRequest, NextApiResponse } from 'next'
import { userBodySchema } from '@/lib/schemas'
import { findOrCreateAuth, findAuth } from '@/controllers/auth'
import { sendCode } from '@/controllers/auth'
import { bodyMiddleware, CORSMiddleware } from '@/lib/middlewares'

// Create the user/auth in DB and send the code for login
async function postHandler(req: NextApiRequest, res: NextApiResponse) {
	try {
		const existAuth = await findAuth(req.body.email)
		if (existAuth === 'Yes') {
			res.status(400).send({ message: 'The user already exists' })
		} else {
			const newAuth = await findOrCreateAuth(req.body)
			await sendCode(req.body.email)
			res
				.status(200)
				.send({ message: 'the code was sent to ' + req.body.email })
		}
	} catch (error) {
		res.status(400).send({ message: 'error: ' + error })
	}
}

// validate the body with the schema
const verifiedHandler = bodyMiddleware(userBodySchema, postHandler)

const handler = method({
	post: verifiedHandler,
})

export default CORSMiddleware(handler)
