import { Item } from '../models'
import { cloudinary } from '../lib/cloudinary'
import { index } from '../lib/algolia'
import { NewItemData, LocationData } from '../lib/types'
import { bodyToIndex } from '@/lib/helpers'

//Create an item
export async function createItem(userId: number, data: NewItemData) {
	let image
	if (data.imgURL) {
		image = await cloudinary.uploader.upload(data.imgURL, {
			resource_type: 'image',
			discard_original_filename: true,
			width: 500,
		})
		const newItem = await Item.create({
			fullName: data.fullName,
			title: data.title,
			description: data.description,
			imgURL: image.secure_url,
			lat: data.lat,
			lng: data.lng,
			state: data.state,
			email: data.email,
			userId: userId,
		})
		const dataForIndex = {
			fullName: data.fullName,
			title: data.title,
			description: data.description,
			imgURL: image.secure_url,
			lat: data.lat,
			lng: data.lng,
			state: data.state,
			email: data.email,
			userId: userId,
		}
		const indexFormatted = bodyToIndex(
			dataForIndex,
			newItem.get('id') as number
		)
		const newIndex = await index.saveObject(indexFormatted)
		return newItem
	} else {
		const newItem = await Item.create({
			fullName: data.fullName,
			title: data.title,
			description: data.description,
			imgURL: 'img',
			lat: data.lat,
			lng: data.lng,
			state: data.state,
			email: data.email,
			userId: userId,
		})
		const indexFormatted = bodyToIndex(data, newItem.get('id') as number)
		const newIndex = await index.saveObject(indexFormatted)
		return newItem
	}
}

//Update an item
export async function updateItem(itemId: number, data: NewItemData) {
	let image
	if (data.imgURL) {
		image = await cloudinary.uploader.upload(data.imgURL, {
			resource_type: 'image',
			discard_original_filename: true,
			width: 1000,
		})
		const itemUpdated = await Item.update(
			{
				fullName: data.fullName,
				title: data.title,
				description: data.description,
				imgURL: image.secure_url,
				lat: data.lat,
				lng: data.lng,
				state: data.state,
				email: data.email,
				userId: data.userId,
			},
			{
				where: { id: itemId },
			}
		)
		const dataForIndex = {
			...data,
			imgURL: image.secure_url,
		}
		const indexFormatted = bodyToIndex(dataForIndex, itemId)
		const indexUpdated = await index.partialUpdateObject(indexFormatted)
		return itemUpdated
	} else {
		const itemUpdated = await Item.update(
			{
				...data,
			},
			{
				where: { id: itemId },
			}
		)
		const indexFormatted = bodyToIndex(data, itemId)
		const indexUpdated = await index.partialUpdateObject(indexFormatted)
		return itemUpdated
	}
}

//Get item by id
export async function getItemtById(itemId: number) {
	const item = await Item.findByPk(itemId)
	return item
}

//Get items near by
export async function getItemsNearBy(data: LocationData) {
	const { lat, lng } = data
	const items = await index.search('', {
		aroundLatLng: [lat, lng].join(','),
		aroundRadius: 10000,
	})
	return items.hits
}
