import { useEffect, useRef, useState } from "react"
import { urlPokemons, pokeAPI, pokemonSprite } from '../api/pokeapi';
import { PokemonList, PokemonListItem, Result } from '../types/pokemonList';
import { RequestStatus } from "../types/requestStatus";

export const usePokemons = () => {
    const [isLoading, setIsLoading] = useState<RequestStatus>('idle')
    const [pokemons, setPokemons] = useState<PokemonListItem[]>([])
    const urlAllPokemons = useRef(`${urlPokemons}?limit=20`)

    const buildListItem = (list: Result[]) => {
        setIsLoading('loading')

        const appendPokemons: PokemonListItem[] = list.map(({ name, url }) => {
            const urlSplit = url.split('/')
            const id = urlSplit[urlSplit.length - 2]
            const picture = `${pokemonSprite}/${id}.png`

            return { id, picture, name }
        })

        setPokemons([...pokemons, ...appendPokemons])
        setIsLoading('success')
    }

    const fetchPokemons = async () => {
        try {
            const response = await pokeAPI.get<PokemonList>(urlAllPokemons.current)
            urlAllPokemons.current = response.data.next
            buildListItem(response.data.results)
        } catch (error) {
            setPokemons([])
            setIsLoading('error')
        }
    }

    useEffect(() => {
        fetchPokemons()
    }, [])

    return { pokemons, isLoading, fetchPokemons }
}
