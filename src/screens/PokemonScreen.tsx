import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { Image, Text, View, StyleSheet } from 'react-native';
import { usePokemon } from '../hooks/usePokemon';
import { Header } from '../components/pokemon/Header';

type Props = StackScreenProps<RootStackParams, 'Pokemon'>

export const PokemonScreen = ({ route }: Props) => {
    const { pokemonItem, color } = route.params
    const { pokemon } = usePokemon(pokemonItem.id)

    return (
        <>
            <Header
                backgroundColor={color}
                picture={pokemonItem.picture}
                name={pokemonItem.name}
                id={pokemonItem.id}
                types={pokemon?.types}
            />
        </>
    )
}

const styles = StyleSheet.create({
})
