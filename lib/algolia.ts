import algoliasearch from 'algoliasearch'

const client = algoliasearch(
	process.env.NEXT_PUBLIC_ALGOLIA_CREDS_ID as string,
	process.env.NEXT_PUBLIC_ALGOLIA_CREDS_APIKEY as string
)
export const index = client.initIndex('items')
