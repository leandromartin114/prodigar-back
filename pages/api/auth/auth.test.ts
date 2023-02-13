import test from 'ava'
import { describe } from 'node:test'
import request from 'supertest'
import * as dotenv from 'dotenv'
dotenv.config()

describe('Auth tests', async () => {
	const email = 'leandromartin_17@hotmail.com'
	const res = await request(process.env.API_URL)
		.post('/api/auth/login')
		.set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.send({ email: email })
	const stringCode = res.body.message.slice(8, 14)
	const numberCode = parseInt(stringCode)

	test('login endpoint should return a message with the code', async (t) => {
		t.plan(2)
		const mockMessage =
			'the code 62683 was sent to leandromartin_17@hotmail.com'
		const mockValue = mockMessage.includes(email).toString()
		t.is(res.status, 200)
		t.truthy(res.body.message.includes(email), mockValue)
	})

	test('token endpoint should return auth token into an obj', async (t) => {
		t.plan(2)
		const res2 = await request(process.env.API_URL)
			.post('/api/auth/token')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.send({ email: email, code: numberCode })
		t.is(res2.status, 200)
		t.deepEqual(res2.body.token.length, 120)
	})
})
