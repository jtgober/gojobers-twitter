/* eslint-disable no-undef */
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()
const apiKey = process.env.CHAT_KEY
const API_ENDPOINT = 'https://api.openai.com/v1/images/generations'

export const generateDalleImage = async (prompt) => {
	const response = await axios.post(
		API_ENDPOINT,
		{
			model: 'image-alpha-001',
			prompt: prompt,
			num_images: 1,
			size: '512x512',
			response_format: 'url',
		},
		{
			headers: {
				Authorization: `Bearer ${apiKey}`,
			},
		}
	)

	const imageUrl = response.data.data[0].url
	return imageUrl
}

console.log(await generateDalleImage('cute cat'))
