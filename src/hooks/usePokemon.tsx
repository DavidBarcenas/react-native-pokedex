import { useEffect, useState } from "react"
import { urlPokemons, pokeAPI } from "../api/pokeapi"
import { Pokemon } from "../types/pokemon"

export const usePokemon = (id: string) => {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemon, setPokemon] = useState<Pokemon | null>(null)

    const getPokemonInfo = async () => {
        setIsLoading(true)
        const resp = await pokeAPI.get<Pokemon>(`${urlPokemons}/${id}`)
        setPokemon(resp.data)
        setIsLoading(false)
    }

    useEffect(() => {
        getPokemonInfo()
    }, [])

    return { pokemon, isLoading }
}