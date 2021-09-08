import { useContext, useEffect, useRef, useState } from "react"

import { baseUrlPokeAPI, pokeAPI, pokemonSprite } from '../api/pokeapi';
import { Store } from "../context/store";

import type { Result, PokemonCustom, PokemonsResponse } from '../types/pokemonList';
import type { RequestStatus } from "../types/requestStatus";

export const usePokemons = () => {
    const [status, setStatus] = useState<RequestStatus>('idle')
    const [pokemons, setPokemons] = useState<PokemonCustom[]>([])
    const { dispatch } = useContext(Store)

    const urlAllPokemons = useRef(`${baseUrlPokeAPI}/pokemon?limit=20`)

    const buildPokemonCustom = (list: Result[]) => {
        setStatus('loading')

        const appendPokemons: PokemonCustom[] = list.map(({ name, url }) => {
            const urlSplit = url.split('/')
            const id = urlSplit[urlSplit.length - 2]
            const picture = `${pokemonSprite}/${id}.png`

            return { id, picture, name }
        })
        
        setPokemons([...pokemons, ...appendPokemons])
        dispatch({type: 'SET_POKEMONS', payload: [...pokemons, ...appendPokemons]})
        setStatus('success')
    }

    const getPokemons = async () => {
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
        if (isMounted) { getPokemons() }

        return () => {
            isMounted = false
        }
    }, [])

    return { pokemons, status, getPokemons }
}
