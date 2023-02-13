import test from 'ava'
import request from 'supertest'
import { describe } from 'node:test'
import * as dotenv from 'dotenv'
dotenv.config()

describe('Contact test', () => {
	test('contact endpoint should return an object with the new contact', async (t) => {
		t.plan(2)
		const mockData = {
			fullName: 'Pedro',
			phoneNumber: 2611116655,
			email: 'pedrito@email.com',
			message: 'me interesa la mesa',
			itemTitle: 'Mesa',
			itemEmail: 'leandromartin_17@hotmail.com',
		}
		const payload = 'pedrito@email.com'
		const res = await request(process.env.API_URL)
			.post('/api/contact/9')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.send(mockData)
		t.is(res.status, 200)
		t.deepEqual(payload, res.body.email)
	})
})
