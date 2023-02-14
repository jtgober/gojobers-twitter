import axios from "axios";

let randomIntFromInterval = () =>{ // min and max included 
    return Math.floor(Math.random() * (1008 - 1 + 1) + 1)
  }
  
  const rndInt = randomIntFromInterval()

export async function getRandomPokemon() {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon-species/${rndInt}`);
      return response.data.name
    } catch (error) {
      console.error(error);
    }
  }