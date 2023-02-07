import test from 'ava'
import { emailCleaner, stringToNumb, bodyToIndex } from './helpers'

test('Email Cleaner', (t) => {
	const payload = 'email@email.com'
	const emailMock = 'EMaiL@emaIl.com'
	const out = emailCleaner(emailMock)
	t.deepEqual(payload, out)
})

test('String to Number', (t) => {
	const payload = 14
	const stringMock = '14'
	const out = stringToNumb(stringMock)
	t.deepEqual(payload, out)
})

test('Body to Index', (t) => {
	const payload = {
		objectID: 14,
		fullName: 'Juan Pérez',
		title: 'Silla',
		description: 'Silla casi nueva',
		_geoloc: {
			lat: -33.333,
			lng: -68.789,
		},
		email: 'juancito@email.com',
		state: 'PUB',
		imgURL: 'https//:myimg.com',
		userId: 4,
	}
	const objectMock = {
		fullName: 'Juan Pérez',
		title: 'Silla',
		description: 'Silla casi nueva',
		lat: -33.333,
		lng: -68.789,
		email: 'juancito@email.com',
		state: 'PUB',
		imgURL: 'https//:myimg.com',
		userId: 4,
	}
	const out = bodyToIndex(objectMock, 14)
	t.deepEqual(payload, out)
})
