import { useEffect, useRef, useState } from "react"
import { getAll, pokeAPI, pokemonSprite } from '../api/pokeapi';
import { PokemonList, PokemonListItem, Result } from '../types/pokemonList';

export const usePokemons = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemons, setPokemons] = useState<PokemonListItem[]>([])
    const urlAllPokemons = useRef(`${getAll}?limit=20`)

    const buildListItem = (list: Result[]) => {
        setIsLoading(true)

        const appendPokemons: PokemonListItem[] = list.map(({ name, url }) => {
            const urlSplit = url.split('/')
            const id = urlSplit[urlSplit.length - 2]
            const picture = `${pokemonSprite}/${id}.png`

            return { id, picture, name }
        })

        setPokemons([...pokemons, ...appendPokemons])
        setIsLoading(false)
    }

    const fetchPokemons = async () => {
        const response = await pokeAPI.get<PokemonList>(urlAllPokemons.current)
        urlAllPokemons.current = response.data.next
        buildListItem(response.data.results)
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    return { pokemons, isLoading, fetchPokemons }
}
