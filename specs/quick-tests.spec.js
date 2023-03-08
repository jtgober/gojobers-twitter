import { expect, test } from 'vitest'
import ejs from 'easy-json-schema'
import schema from '../schema/useless-facts.schema.json'  assert { type: 'json' }; 
import { getRandomPokemon } from '../lib/poke-api.js'
import { getGojobers } from '../lib/get-gojobers.js'
import { getRandomFact } from '../lib/useless-facts.js'


test('Pokemon Should come back as expected', async () => {
	expect(await getRandomPokemon(1)).toBe('bulbasaur')
	expect(await getRandomPokemon(4)).toBe('charmander')
	expect(await getRandomPokemon(7)).toBe('squirtle')
})

test('Should tell some kind of joke', async () => {
	var facts = await getRandomFact()
	let factsData = facts.data
	let factsSchema = ejs(factsData)
	expect(facts.status).toBe(200)
	expect(facts.data.language).toBe('en')
    expect(factsSchema).toStrictEqual(schema)
})

test('Should be able to find user details', async () => {
	let gojobers = await getGojobers('Gojobers')
	expect(gojobers.id).toBe(1029058848701784000)
	expect(gojobers.name).toBe('Jonathan Gober')
	expect(gojobers.screen_name).toBe('Gojobers')
	expect(gojobers.description).toContain('Father')
})
