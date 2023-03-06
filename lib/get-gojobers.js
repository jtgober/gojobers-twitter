/* eslint-disable no-undef */
import Twit from 'twit'
import dotenv from 'dotenv'
dotenv.config()

const T = new Twit({
	consumer_key: process.env.API_KEY,
	consumer_secret: process.env.API_SECRET,
	access_token: process.env.ACCESS_TOKEN,
	access_token_secret: process.env.ACCESS_TOKEN_SECRET,
})
export const getGojobers = async (screenName) => {
	try {
		const response = await T.get('users/show', { screen_name: screenName })
		return response.data
	} catch (err) {
		console.log('Error:', err)
	}
}

getGojobers('Gojobers')
