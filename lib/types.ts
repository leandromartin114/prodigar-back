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

export type { UserSignupData, UserUpdateData, NewItemData, LocationData }
