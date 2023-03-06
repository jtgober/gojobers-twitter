import { chatGPT } from './chatGPT.js'
import { getRandomPokemon } from './poke-api.js'
const whoseThatPokemon = await getRandomPokemon()
const text = `Letting ChatGPT chat about pokemon: ${await chatGPT(`write me a tweet about the pokemon ${whoseThatPokemon}`)} #ChatGPT #AI`
console.log(text)