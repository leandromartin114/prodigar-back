import * as sgMail from '@sendgrid/mail'
import { NewContactData } from 'lib/types'

sgMail.setApiKey(process.env.SENDGRID_CREDS_APIKEY as string)

// Sending the code for auth/login
export async function sendCodeByEmail(email: string, code: number) {
	const msg = {
		to: email,
		from: 'appprodigar@gmail.com',
		subject: 'Código de validación',
		html: `<div style={display: "flex", align-items: "center", justify-items: "center", padding: 20px}>
            <img width="100px" height="100px" src="https://res.cloudinary.com/dn9dbt4bi/image/upload/v1675190717/prodigar_xmxkcg.svg" alt="logo"/>
            <h1>${code}</h1>
            <p>Con este código podés loguearte. Recordá que el mismo es válido durante 10 minutos</p>
        </div>
        `,
	}
	await sgMail.send(msg)
	return true
}

// Sending the message of new contact about a published item
export async function sendContactEmail(data: NewContactData) {
	const msg = {
		to: data.itemEmail,
		from: 'appprodigar@gmail.com',
		subject: `Tenés un nuevo mensaje sobre tu publicación: ${data.itemTitle}`,
		html: `<div style={display: "flex", align-items: "center", justify-items: "center", padding: 20px}>
            <img width="100px" height="100px" src="https://res.cloudinary.com/dn9dbt4bi/image/upload/v1675190717/prodigar_xmxkcg.svg" alt="logo"/>
            <h1>Quieren contactarte por tu item: ${data.itemTitle}</h1>
            <h2>Mensaje:</h2>
            <p><b>Nombre:</b> ${data.fullName}</p>
            <p><b>Teléfono:</b> ${data.phoneNumber}</p>
            <p><b>Email:</b> ${data.email}</p>
            <p><b>Comentario:</b> ${data.message}</p>
        </div>
        `,
	}
	await sgMail.send(msg)
	return true
}
