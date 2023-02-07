import test from 'ava'
import { generateToken, decodeToken } from './jwt'

test('JWT Decoding Token', (t) => {
	const payload = { id: 1234 }
	const token = generateToken(payload)
	const out = decodeToken(token)
	delete out.iat
	t.deepEqual(payload, out)
})
