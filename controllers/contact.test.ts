import test from 'ava'
import { createContact } from './contact'

test('Create Contact', async (t) => {
	const payload = false
	const mockData = {
		fullName: 'Juan',
		phoneNumber: 2612222222,
		email: 'juancito@email.com',
		message: 'Necesito la mesa',
		itemTitle: 'Silla',
		itemEmail: 'leandromartin_17@hotmail.com',
		itemId: 8,
	}
	const out = await createContact(8, mockData)
	const res = out.isNewRecord
	t.deepEqual(payload, res)
})
