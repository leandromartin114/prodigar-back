import test from 'ava'
import request from 'supertest'

const API_URL = 'https://prodigar-api.vercel.app'

test('login endpoint should return a message with the code', async (t) => {
	t.plan(2)
	const email = 'leandromartin_17@hotmail.com'
	const mockMessage = 'the code 62683 was sent to leandromartin_17@hotmail.com'
	const mockValue = mockMessage.includes(email).toString()
	const res = await request(API_URL)
		.post('/api/auth/login')
		.set('Accept', 'application/json')
		.set('Content-Type', 'application/json')
		.send({ email: email })
	t.is(res.status, 200)
	t.truthy(res.body.message.includes(email), mockValue)
})
