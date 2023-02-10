import { Auth } from '@/models/index'
import { User } from '@/models/index'
import { Item } from '@/models/index'
import { UserUpdateData } from '@/lib/types'

//getting the user data
export async function getUserData(userId: number) {
	try {
		const user = await User.findByPk(userId)
		return user
	} catch (error) {
		console.log(error)
	}
}

//updating a user
export async function updateUser(userId: number, data: UserUpdateData) {
	const existUser = await User.findOne({ where: { email: data.email } })
	if (existUser && existUser.get('id') !== userId) {
		return 'Forbidden'
	}
	try {
		const dataForUser = {
			...data,
		}
		const dataForAuth = {
			email: data.email,
		}
		const userUpdated = await User.update(dataForUser, {
			where: { id: userId },
		})
		const authUpdated = await Auth.update(dataForAuth, {
			where: { userId: userId },
		})
		const newUserData = await User.findByPk(userId)
		return newUserData
	} catch (error) {
		console.log(error)
	}
}

//getting all published items by a user
export async function getUserItems(userId: number) {
	try {
		const items = await Item.findAll({
			where: { userId: userId },
		})
		return items
	} catch (error) {
		console.error(error)
	}
}
