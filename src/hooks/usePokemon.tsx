import { useEffect, useState } from "react"
import { getAll, pokeAPI } from "../api/pokeapi"
import { Pokemon } from "../models/pokemon"

export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)

    const getPokemonInfo = async () => {
        setIsLoading(true)
        const resp = await pokeAPI.get<Pokemon>(`${getAll}/${id}`)
        setPokemon(resp.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    return { pokemon, isLoading }
}