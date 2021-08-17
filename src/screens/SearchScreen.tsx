import React, { useEffect, useState } from 'react'
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { SearchInput } from '../components/SearchInput';

export const SearchScreen = () => {
    // const {top} = useSafeAreaInsets()
    const [pokemons, setPokemons] = useState([])
    const [term, setTerm] = useState('')

    useEffect(() => {
        if (term.length === 0) {
            return setPokemons([])
        }

        if (isNaN(Number(term))) {
            // search name
            setPokemons([]) // pokemons filtered
        } else {
            // search id
        }

    }, [term])

    return (
        <View>
            <SearchInput onDebounce={setTerm} />
            <Text>{term}</Text>
        </View>
    )
}
