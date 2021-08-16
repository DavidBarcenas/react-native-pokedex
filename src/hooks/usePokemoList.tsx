import { useEffect, useRef, useState } from "react"
import { getAll, pokeAPI, pokemonSprite } from '../api/pokeapi';
import { PokemonList, PokemonListItem, Result } from '../models/pokemonList';

export const usePokemoList = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [pokemonList, setPokemonList] = useState<PokemonListItem[]>([])
    const url = useRef(`${getAll}?limit=20`)

    const buildListItem = (list: Result[]) => {
        setIsLoading(true)

        const newPokemonList: PokemonListItem[] = list.map(({ name, url }) => {
            const urlSplit = url.split('/')
            const id = urlSplit[urlSplit.length - 2]
            const picture = `${pokemonSprite}/${id}.png`

            return { id, picture, name }
        })

        setPokemonList([...pokemonList, ...newPokemonList])
        setIsLoading(false)
    }

    const getPokemons = async () => {
        const resp = await pokeAPI.get<PokemonList>(url.current)
        url.current = resp.data.next
        buildListItem(resp.data.results)
    }

    useEffect(() => {
        getPokemons()
    }, [])

    return [pokemonList, isLoading]
}
