import { NewItemData } from '../lib/types'

export function bodyToIndex(body: NewItemData, id: number) {
	const result: any = {}
	if (id) {
		result.objectID = id
	}
	if (body.title) {
		result.title = body.title
	}
	if (body.description) {
		result.description = body.description
	}
	if (body.location) {
		result.location = body.location
	}
	if (body.lat && body.lng) {
		result._geoloc = {
			lat: body.lat,
			lng: body.lng,
		}
	}
	if (body.email) {
		result.email = body.email
	}
	if (body.state) {
		result.state = body.state
	}
	if (body.imgURL) {
		result.imgURL = body.imgURL
	}
	if (body.userId) {
		result.userId = body.userId
	}
	return result
}

export function emailCleaner(email: string) {
	return email.trim().toLowerCase()
}
