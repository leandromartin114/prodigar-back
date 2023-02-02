type UserSignupData = {
	fullName: string
	email: string
	address: string
}

type UserUpdateData = {
	fullName?: string
	email?: string
	address?: string
}

type NewItemData = {
	title: string
	description: string
	imgURL: string
	location: string
	lat: number
	lng: number
	state: string
	email: string
	userId?: number
}

type LocationData = {
	lat: number
	lng: number
}

type NewContactData = {
	fullName: string
	phoneNumber: number
	email: string
	message: string
	itemTitle: string
	itemEmail: string
	itemId?: number
}

export type {
	UserSignupData,
	UserUpdateData,
	NewItemData,
	LocationData,
	NewContactData,
}
