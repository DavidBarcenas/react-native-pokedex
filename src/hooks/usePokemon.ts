import { useEffect, useState } from "react"
import { baseUrlPokeAPI, pokeAPI } from "../api/pokeapi"
import { RequestStatus } from "../types/requestStatus"
import { Pokemon, PokemonState } from "../types/pokemon"
import { Evolution } from "../types/evolution"
import { Species } from "../types/species"



export const usePokemon = (id: string) => {
    const [status, setStatus] = useState<RequestStatus>('idle')
    const [pokemon, setPokemon] = useState<PokemonState | null>(null)

    const getPokemonInfo = async () => {
        try {
            setStatus('loading')
            const about = pokeAPI.get<Pokemon>(`${baseUrlPokeAPI}/pokemon/${id}`)
            const evolution = pokeAPI.get<Evolution>(`${baseUrlPokeAPI}/evolution-chain/${id}`)
            const species = pokeAPI.get<Species>(`${baseUrlPokeAPI}/pokemon-species/${id}`)
    
            const data = await Promise.all([ about, evolution, species ])
            
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