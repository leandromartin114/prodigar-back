import { v2 as cloudinary } from 'cloudinary'
import * as dotenv from 'dotenv'
dotenv.config()

cloudinary.config({
	cloud_name: process.env.CLOUDINARY_CREDS_CLOUDNAME,
	api_key: process.env.CLOUDINARY_CREDS_APIKEY,
	api_secret: process.env.CLOUDINARY_CREDS_APISECRET,
})

export { cloudinary }
