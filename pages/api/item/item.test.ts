import test from 'ava'
import { describe } from 'node:test'
import request from 'supertest'
import * as dotenv from 'dotenv'
dotenv.config()

describe('Item tests', async () => {
	const mockDataNew = {
		fullName: 'Leandro',
		title: 'Escritorio',
		description: 'Escritorio blanco en muy buen estado',
		lat: -34,
		lng: -70,
		state: 'PUB',
		email: 'leandromartin_17@hotmail.com',
		userId: 1,
	}
	const mockDataUpdate = {
		fullName: 'Leandro',
		title: 'Escritorio blanco',
		description: 'Escritorio blanco en muy buen estado',
		lat: -34,
		lng: -70,
		state: 'PUB',
		email: 'leandromartin_17@hotmail.com',
		userId: 1,
	}
	const payload = 'leandromartin_17@hotmail.com'
	const payload2 = 'Escritorio blanco'

	test('New item endpoint should return an object with the item created', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.post('/api/item/new')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Authorization', 'bearer ' + process.env.TOKEN)
			.send(mockDataNew)
		t.is(res.status, 200)
		t.deepEqual(payload, res.body.email)
	})

	test('Update item endpoint should return an object with the item updated', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.put('/api/item/update/77')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
			.set('Authorization', 'bearer ' + process.env.TOKEN)
			.send(mockDataUpdate)
		t.is(res.status, 200)
		t.deepEqual(payload2, res.body.title)
	})

	test('Get item data by id', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.get('/api/item/77')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
		t.is(res.status, 200)
		t.deepEqual(payload2, res.body.title)
	})
})
