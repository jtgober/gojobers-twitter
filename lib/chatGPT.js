/* eslint-disable no-undef */
import axios from 'axios'
import * as dotenv from 'dotenv'
dotenv.config()

export const chatGPT = async (prompt) => {
	const apiKey = process.env.CHAT_KEY
	try {
		const response = await axios.post(
			'https://api.openai.com/v1/engines/text-davinci-002/completions',
			{
				prompt: prompt,
				max_tokens: 128,
				temperature: 0.75,
			},
			{
				headers: {
					'Content-Type': 'application/json',
					Authorization: `Bearer ${apiKey}`,
				},
			}
		)

		const completions = response.data.choices
		const completionMain = completions[0].text
		return completionMain
	} catch (error) {
		console.error(error)
	}
}
console.log(await chatGPT('write me a short story'))