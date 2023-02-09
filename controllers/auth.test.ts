import test from 'ava'
import { findAuth, findOrCreateAuth, sendCode } from './auth'

test('Find Auth', async (t) => {
	const payload = 'Yes'
	const email = 'leandromartin_17@hotmail.com'
	const out = await findAuth(email)
	t.deepEqual(payload, out)
})

test('Find or Create Auth', async (t) => {
	const payload = false
	const mockData = {
		fullName: 'Leandro Roldan',
		email: 'leandromartin_17@hotmail.com',
		address: 'Calle Libertad',
	}
	const out = await findOrCreateAuth(mockData)
	const res = out.isNewRecord
	t.deepEqual(payload, res)
})

test('Send Code', async (t) => {
	const payload = typeof 12345
	const email = 'leandromartin_17@hotmail.com'
	const out = await sendCode(email)
	const res = typeof out
	t.deepEqual(payload, res)
})
