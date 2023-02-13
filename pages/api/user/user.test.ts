import test from 'ava'
import { describe } from 'node:test'
import request from 'supertest'
import * as dotenv from 'dotenv'
dotenv.config()

describe('User tests', async () => {
	const mockData = {
		fullName: 'Leandrito',
		email: 'leandromartin_17@hotmail.com',
		address: 'Calle Avellaneda',
	}
	const payload = 'leandromartin_17@hotmail.com'

	test('Update user should return an object with the user updated', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.put('/api/user/update')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Authorization', 'bearer ' + process.env.TOKEN)
			.send(mockData)
		t.is(res.status, 200)
		t.deepEqual(payload, res.body.email)
	})

	test('Get profile should return an object with a user data', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.get('/api/user/profile')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Authorization', 'bearer ' + process.env.TOKEN)
		t.is(res.status, 200)
		t.deepEqual(payload, res.body.email)
	})

	test('Get items should return an array of the items created by the user', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.get('/api/user/items')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Authorization', 'bearer ' + process.env.TOKEN)
		t.is(res.status, 200)
		t.deepEqual(payload, res.body[0].email)
	})
})
