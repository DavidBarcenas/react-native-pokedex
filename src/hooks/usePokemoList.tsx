import { useEffect, useRef, useState } from "react"
import { pokeAPI } from '../api/pokeapi';
import { PokemonList, PokemonListItem, Result } from '../models/pokemonList';

export const usePokemoList = () => {
    const [pokemonList, setpokemonList] = useState<PokemonListItem[]>([])
    const url = useRef('https://pokeapi.co/api/v2/pokemon?limit=20')

    const mapPokemonListItem = (list: Result[]) => {
        list.map(pokemon => {
            console.log(pokemon.name)
        })
    }

    const getPokemons = async () => {
        const resp = await pokeAPI.get<PokemonList>(url.current)
        url.current = resp.data.next
        mapPokemonListItem(resp.data.results)
    }

    useEffect(() => {
        getPokemons()
    }, [])

}
