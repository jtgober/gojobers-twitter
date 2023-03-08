/* eslint-disable no-undef */
import axios from "axios"
import * as dotenv from "dotenv"
dotenv.config()

export async function getRandomFact () {
	try {
		const response = await axios.get("https://uselessfacts.jsph.pl/api/v2/facts/random?language=en")
		return response
	} catch (error) {
		console.error(error)
	}
}
