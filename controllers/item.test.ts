import test from 'ava'
import { createItem, updateItem, getItemtById, getItemsNearBy } from './item'

// test('Create Item', async (t) => {
// 	const payload = {
// 		fullName: 'Leandro',
// 		title: 'Mesa',
// 		description: 'Mesa redonda blanca',
// 		imgURL: 'img',
// 		lat: -34,
// 		lng: -68,
// 		state: 'PUB',
// 		email: 'leandromartin_17@hotmail.com',
// 		userId: 1,
// 	}
// 	const mockData = {
// 		fullName: 'Leandro',
// 		title: 'Mesa',
// 		description: 'Mesa redonda blanca',
// 		lat: -34,
// 		lng: -68,
// 		state: 'PUB',
// 		email: 'leandromartin_17@hotmail.com',
// 	}
// 	const out = await createItem(1, mockData)
// 	const res = {
// 		fullName: out.get("fullName"),
// 		title: out.get("title"),
// 		description: out.get("description"),
// 		imgURL: out.get("imgURL"),
// 		lat: out.get("lat"),
// 		lng: out.get("lng"),
// 		state: out.get("state"),
// 		email: out.get("email"),
// 		userId: out.get("userId"),
// 	}
// 	t.deepEqual(payload, res)
// })

test('Update Item', async (t) => {
	const payload = {
		fullName: 'Leandro',
		title: 'Mesa',
		description: 'Mesa redonda roja',
		imgURL: 'img',
		lat: -34,
		lng: -68,
		state: 'PUB',
		email: 'leandromartin_17@hotmail.com',
		userId: 1,
	}
	const mockData = {
		fullName: 'Leandro',
		title: 'Mesa',
		description: 'Mesa redonda roja',
		lat: -34,
		lng: -68,
		state: 'PUB',
		email: 'leandromartin_17@hotmail.com',
	}
	const out = await updateItem(8, mockData)
	const res = {
		fullName: out.get('fullName'),
		title: out.get('title'),
		description: out.get('description'),
		imgURL: out.get('imgURL'),
		lat: out.get('lat'),
		lng: out.get('lng'),
		state: out.get('state'),
		email: out.get('email'),
		userId: out.get('userId'),
	}
	t.deepEqual(payload, res)
})

test('Get Item By Id', async (t) => {
	const payload = {
		id: 9,
		fullName: 'Leandro',
		title: 'Mesa',
		description: 'Mesa redonda blanca',
		imgURL: 'img',
		lat: -34,
		lng: -68,
		state: 'PUB',
		email: 'leandromartin_17@hotmail.com',
		userId: 1,
	}
	const out = await getItemtById(9)
	const res = {
		id: out.get('id'),
		fullName: out.get('fullName'),
		title: out.get('title'),
		description: out.get('description'),
		imgURL: out.get('imgURL'),
		lat: out.get('lat'),
		lng: out.get('lng'),
		state: out.get('state'),
		email: out.get('email'),
		userId: out.get('userId'),
	}
	t.deepEqual(payload, res)
})

test('Get Items Near By', async (t) => {
	const payload = {
		objectID: '9',
		fullName: 'Leandro',
		title: 'Mesa',
		description: 'Mesa redonda blanca',
	}
	const mockData = { lat: -34, lng: -68 }
	const out = await getItemsNearBy(mockData)
	const res = out[0]
	const result = {
		objectID: res.objectID,
		fullName: res['fullName'],
		title: res['title'],
		description: res['description'],
	}
	t.deepEqual(payload, result)
})
