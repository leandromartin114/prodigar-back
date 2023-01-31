import { Auth } from '../models'
import { User } from '../models'
import { addMinutes, isCodeExpired } from '@/lib/date-fns'
import { generateToken } from '@/lib/jwt'
import { random } from '@/lib/random-seed'
import { sendEmail } from '@/lib/sendgrid'
import { UserBodyData } from '@/lib/types'

//find auth by email
export async function findAuth(email: string) {
	try {
		const authFound = await Auth.findOne({
			where: { email: email },
		})
		if (authFound) {
			return 'Yes'
		} else {
			return 'No'
		}
	} catch (error) {
		console.error(error)
	}
}

//create user and his auth element if it doesn't exist
export async function findOrCreateAuth(data: UserBodyData) {
	const { email, fullName, address } = data
	try {
		const [user, created] = await User.findOrCreate({
			where: { email: email },
			defaults: {
				email,
				fullName,
				address,
			},
		})
		const [auth, authCreated] = await Auth.findOrCreate({
			where: { userId: user.get('id') },
			defaults: {
				email,
				userId: user.get('id'),
				code: 0,
				expires: new Date(),
			},
		})
		return user
	} catch (error) {
		console.error(error)
	}
}
//sending the code for login
export async function sendCode(email: string) {
	try {
		const code = random.intBetween(10000, 99999)
		const now = new Date()
		const tenMinutesExpDate = addMinutes(now, 10)
		const newAuthData = {
			code: code,
			expires: tenMinutesExpDate,
		}
		await Auth.update(newAuthData, {
			where: { email: email },
		})
		await sendEmail(email, code)
		return code
	} catch (error) {
		console.error(error)
	}
}

//generate token for auth
export async function sendToken(email: string, code: number) {
	try {
		const authFound = await Auth.findOne({
			where: { email: email, code: code },
		})
		if (!authFound) {
			return null
		} else {
			const expiredDate = authFound.get('expires')
			const expired = isCodeExpired(expiredDate)
			if (expired) {
				console.error('Code Expired')
				return false
			} else {
				const token = generateToken({ userId: authFound.get('id') })
				const now = new Date()
				await Auth.update(
					{ expires: now },
					{
						where: { email: email },
					}
				)
				return token
			}
		}
	} catch (error) {
		console.error(error)
	}
}
