import { Contact } from '@/models'
import { sendContactEmail } from '@/lib/sendgrid'
import { NewContactData } from 'lib/types'

// Create new contact
export async function createContact(data: NewContactData) {
	const newContact = await Contact.create({
		fullName: data.fullName,
		phoneNumber: data.phoneNumber,
		email: data.email,
		message: data.message,
		itemId: data.itemId,
	})
	await sendContactEmail(data)
	return newContact
}
