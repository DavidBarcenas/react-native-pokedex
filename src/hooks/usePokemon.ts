import { useContext, useEffect, useState } from "react"

import { baseUrlPokeAPI, pokeAPI } from "../api/pokeapi"
import { Store } from "../context/store"

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
                payload: {
                    abilities: data[0].data.abilities,
                    weight: data[0].data.weight,
                    height: data[0].data.height,
                    egg_groups: data[2].data.egg_groups,
                    habitat: data[2].data.habitat,
                }
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