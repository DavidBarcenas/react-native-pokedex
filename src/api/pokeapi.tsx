import axios from "axios";

export const pokeAPI = axios.create();

export const pokemonSprite = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork'
export const urlPokemons = 'https://pokeapi.co/api/v2/pokemon'