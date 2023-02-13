import test from 'ava'
import { describe } from 'node:test'
import request from 'supertest'
import * as dotenv from 'dotenv'
dotenv.config()

describe('Signup test', async () => {
	const mockData = {
		fullName: 'Lionel Messi',
		email: 'leomessi@email.com',
		address: 'Calle Paris',
	}
	const payload = 'The user already exists'

	test('signup should return an object with a message and the code', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.post('/api/signup')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.send(mockData)
		t.is(res.status, 400)
		t.deepEqual(payload, res.body.message)
	})
})
