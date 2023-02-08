import algoliasearch from 'algoliasearch'
import * as dotenv from 'dotenv'
dotenv.config()

const client = algoliasearch(
	process.env.ALGOLIA_CREDS_ID as string,
	process.env.ALGOLIA_CREDS_APIKEY as string
)
export const index = client.initIndex('items')
