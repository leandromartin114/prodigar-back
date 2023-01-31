import * as sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_CREDS_APIKEY as string)

export async function sendEmail(email: string, code: number) {
	const msg = {
		to: email,
		from: 'appprodigar@gmail.com',
		subject: 'Código de validación',
		html: `<div style={display: "flex", align-items: "center", justify-items: "center", padding: 20px}>
            <img width="100px" height="100px" src="https://res.cloudinary.com/dn9dbt4bi/image/upload/v1675190717/prodigar_xmxkcg.svg" alt="logo"/>
            <h1>Tu código</h1>
            <h2>${code}</h2>
            <p>Con este código podés loguearte. Recordá que el mismo es válido durante 10 minutos</p>
        </div>
        `,
	}
	await sgMail.send(msg)
	return true
}
