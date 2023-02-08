import test from 'ava'
import { isCodeExpired, addMinutes } from './date-fns'

test('Is Code Expired?', (t) => {
	const payload = false
	const now = new Date()
	const mockDate = addMinutes(now, 10)
	const out = isCodeExpired(mockDate)
	t.deepEqual(payload, out)
})
