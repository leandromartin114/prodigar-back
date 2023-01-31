import * as sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_CREDS_APIKEY as string)
export { sgMail }
