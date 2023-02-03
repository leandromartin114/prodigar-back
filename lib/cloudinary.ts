import { v2 as cloudinary } from 'cloudinary'

cloudinary.config({
	cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CREDS_CLOUDNAME,
	api_key: process.env.NEXT_PUBLIC_CLOUDINARY_CREDS_APIKEY,
	api_secret: process.env.NEXT_PUBLIC_CLOUDINARY_CREDS_APISECRET,
})

export { cloudinary }
