import * as yup from 'yup'

let querySchema = yup.mixed()

let userBodySchema = yup
	.object()
	.shape({
		fullName: yup.string().required(),
		email: yup.string().email().required(),
		address: yup.string().required(),
	})
	.noUnknown(true)
	.strict()

let itemBodySchema = yup
	.object()
	.shape({
		fullName: yup.string().required(),
		title: yup.string().required(),
		description: yup.string().required(),
		imgURL: yup.string(),
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
		itemTitle: yup.string().required(),
		itemEmail: yup.string().email().required(),
	})
	.noUnknown(true)
	.strict()

export { userBodySchema, querySchema, itemBodySchema, contactBodySchema }
