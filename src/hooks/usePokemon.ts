import { useContext, useEffect, useState } from "react"

import { baseUrlPokeAPI, pokeAPI } from "../api/pokeapi"
import { Store } from "../context/store"
import { mapToAbout } from "../utils/mapper"

import type { RequestStatus } from "../types/requestStatus"
import type { Pokemon } from "../types/pokemon"
import type { Species } from "../types/species"


export const usePokemon = (id: string) => {
    const { dispatch } = useContext(Store)
    const [status, setStatus] = useState<RequestStatus>('idle')
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)

    const getPokemonInfo = async () => {
        setStatus('loading')
        try {
            const getAbout = pokeAPI.get<Pokemon>(`${baseUrlPokeAPI}/pokemon/${id}`)
            const getSpecies = pokeAPI.get<Species>(`${baseUrlPokeAPI}/pokemon-species/${id}`)
            const getEvolution = pokeAPI.get((await getSpecies).data.evolution_chain.url)
    
            const [about, species, evolution] = await Promise.all([ getAbout, getSpecies, getEvolution ])

            dispatch({ type: 'SET_ABOUT', payload: mapToAbout(about.data, species.data) })
            dispatch({ type: 'SET_STATS', payload: about.data.stats })
            dispatch({ type: 'SET_EVOLUTION', payload: evolution.data })
            dispatch({ type: 'SET_MOVES', payload: about.data.moves })
            
            setPokemon(about.data)
            setStatus('success')
        } catch (error) {
            setPokemon(null)
            setStatus('error')
        }
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    return { pokemon, status }
}