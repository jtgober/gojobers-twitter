import axios from 'axios'

export async function getRandomPokemon(num) {
	try {
		const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${num}`)
		return response.data.name
	} catch (error) {
		console.error(error)
	}
}