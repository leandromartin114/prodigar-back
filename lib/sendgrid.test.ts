import test from 'ava'
import { sendCodeByEmail, sendContactEmail } from './sendgrid'

// test('Send Code', async (t) => {
// 	const payload = true
// 	const mockEmail = 'leandromartin_17@hotmail.com'
// 	const mockCode = 12345
// 	const out = await sendCodeByEmail(mockEmail, mockCode)
// 	t.deepEqual(payload, out)
// })

// test('Send Contact', async (t) => {
// 	const payload = true
// 	const mockData = {
// 		fullName: 'Juan',
// 		phoneNumber: 2612222222,
// 		email: 'juancito@email.com',
// 		message: 'Necesito una silla para mi escritorio',
// 		itemTitle: 'Silla',
// 		itemEmail: 'leandromartin_17@hotmail.com',
// 		itemId: 14,
// 	}
// 	const out = await sendContactEmail(mockData)
// 	t.deepEqual(payload, out)
// })
