import { useEffect, useRef, useState } from "react"
import { urlPokemons, pokeAPI, pokemonSprite } from '../api/pokeapi';
import { Result, PokemonCustom, PokemonsResponse } from '../types/pokemonList';
import { RequestStatus } from "../types/requestStatus";

export const usePokemons = () => {
    const [status, setStatus] = useState<RequestStatus>('idle')
    const [pokemons, setPokemons] = useState<PokemonCustom[]>([])
    const urlAllPokemons = useRef(`${urlPokemons}?limit=20`)

    const buildPokemonCustom = (list: Result[]) => {
        setStatus('loading')

        const appendPokemons: PokemonCustom[] = list.map(({ name, url }) => {
            const urlSplit = url.split('/')
            const id = urlSplit[urlSplit.length - 2]
            const picture = `${pokemonSprite}/${id}.png`

            return { id, picture, name }
        })

        setPokemons([...pokemons, ...appendPokemons])
        setStatus('success')
    }

    const fetchPokemons = async () => {
        try {
            const response = await pokeAPI.get<PokemonsResponse>(urlAllPokemons.current)
            urlAllPokemons.current = response.data.next
            buildPokemonCustom(response.data.results)
        } catch (error) {
            setPokemons([])
            setStatus('error')
        }
    }

    useEffect(() => {
        let isMounted = true;
        if (isMounted) { fetchPokemons() }

        return () => {
            isMounted = false
        }
    }, [])

    return { pokemons, status, fetchPokemons }
}
