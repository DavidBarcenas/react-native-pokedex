import { useEffect, useRef } from "react"
import { pokeAPI } from '../api/pokeapi';

export const usePokemoList = () => {
    const url = useRef('https://pokeapi.co/api/v2/pokemon?limit=20')

    const getPokemons = async () => {
        const resp = await pokeAPI.get(url.current)
    }

    useEffect(() => {
        getPokemons()
    }, [])

}
