import axios from "axios";

let randomNumber = () => { // min and max included 
  return Math.floor(Math.random() * 1008) + 1
}

const rndInt = randomNumber()


export async function getRandomPokemon(num) {
  try {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${num}`);
    return response.data.name
  } catch (error) {
    console.error(error);
  }
}

console.log(await getRandomPokemon(rndInt));