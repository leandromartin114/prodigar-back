import test from 'ava'
import { describe } from 'node:test'
import request from 'supertest'
import * as dotenv from 'dotenv'
dotenv.config()

describe('Search test', async () => {
	test('Get items should return an array with items', async (t) => {
		t.plan(2)
		const res = await request(process.env.API_URL)
			.get('/api/search?lat=-34.902166&lng=-70.797225')
			.set('Accept', 'application/json')
			.set('Content-Type', 'application/json')
		t.is(res.status, 200)
		t.deepEqual(-34.902166, res.body[0]._geoloc.lat)
	})
})
