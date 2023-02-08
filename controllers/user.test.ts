import test from 'ava'
import { getUserData, getUserItems, updateUser } from './user'

test('Get User Data', async (t) => {
	const payload = {
		id: 1,
		fullName: 'Leandro',
		email: 'leandromartin_17@hotmail.com',
		address: 'Calle Libertad',
	}
	const out = await getUserData(1)
	const res = {
		id: out.get('id'),
		fullName: out.get('fullName'),
		email: out.get('email'),
		address: out.get('address'),
	}
	t.deepEqual(payload, res)
})

test('Update User', async (t) => {
	const payload = {
		fullName: 'Leandro',
		address: 'Calle Libertad',
		email: 'leandromartin_17@hotmail.com',
	}
	const mockData = {
		fullName: 'Leandro',
		address: 'Calle Libertad',
		email: 'leandromartin_17@hotmail.com',
	}
	const out = await updateUser(1, mockData)
	const res = {
		fullName: out.get('fullName'),
		address: out.get('address'),
		email: out.get('email'),
	}
	t.deepEqual(payload, res)
})

test('Get User Items', async (t) => {
	const payload = 'leandromartin_17@hotmail.com'
	const out = await getUserItems(1)
	const res = out[0].get('email')
	t.deepEqual(payload, res)
})
