import { useContext, useEffect, useState } from "react"

import { baseUrlPokeAPI, pokeAPI } from "../api/pokeapi"
import { Store } from "../context/store"
import { mapToAbout } from "../utils/mapper"

import type { RequestStatus } from "../types/requestStatus"
import type { Pokemon, PokemonState } from "../types/pokemon"
import type { Species } from "../types/species"


export const usePokemon = (id: string) => {
    const [status, setStatus] = useState<RequestStatus>('idle')
    const [pokemon, setPokemon] = useState<PokemonState | null>(null)
    const { dispatch } = useContext(Store)

    const getPokemonInfo = async () => {
        try {
            setStatus('loading')
            const about = pokeAPI.get<Pokemon>(`${baseUrlPokeAPI}/pokemon/${id}`)
            const species = pokeAPI.get<Species>(`${baseUrlPokeAPI}/pokemon-species/${id}`)
            const evolution = pokeAPI.get((await species).data.evolution_chain.url)
    
            const data = await Promise.all([ about, evolution, species ])

            dispatch({
                type: 'SET_ABOUT',
                payload: mapToAbout(data[0].data, data[2].data)
            })
            
            dispatch({
                type: 'SET_STATS',
                payload: data[0].data.stats
            })
            
            dispatch({
                type: 'SET_EVOLUTION',
                payload: data[1].data
            })
            
            setPokemon({
                about: data[0].data,
                evolution: data[1].data,
                species: data[2].data,
            })
            setStatus('success')
        } catch (error) {
            setStatus('error')
        }
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    return { pokemon, status }
}