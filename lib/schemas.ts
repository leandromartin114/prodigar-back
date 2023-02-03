import * as yup from 'yup'

let userBodySchema = yup
	.object()
	.shape({
		fullName: yup.string().required(),
		email: yup.string().email().required(),
		address: yup.string().required(),
	})
	.noUnknown(true)
	.strict()

let querySchema = yup.mixed()

let itemBodySchema = yup
	.object()
	.shape({
		title: yup.string().required(),
		description: yup.string().required(),
		imgURL: yup.string().required(),
		location: yup.string().required(),
		lat: yup.number().required(),
		lng: yup.number().required(),
		state: yup.string().required(),
		email: yup.string().email().required(),
		userId: yup.number().required(),
	})
	.noUnknown(true)
	.strict()

let contactBodySchema = yup
	.object()
	.shape({
		fullName: yup.string().required(),
		phoneNumber: yup.number().required(),
		email: yup.string().email().required(),
		message: yup.string().required(),
		itemId: yup.number().required(),
		itemTitle: yup.string().required(),
		itemEmail: yup.string().email().required(),
	})
	.noUnknown(true)
	.strict()
