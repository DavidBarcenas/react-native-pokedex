import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { Image, Text, View, StyleSheet, ActivityIndicator } from 'react-native';
import { usePokemon } from '../hooks/usePokemon';
import { Header } from '../components/pokemon/Header';
import { TabNavigator } from '../navigation/TabNavigator';

type Props = StackScreenProps<RootStackParams, 'Pokemon'>

const RED_COLOR = '#fc6c6d'

export const PokemonScreen = ({ route }: Props) => {
    const { pokemonItem, color } = route.params
    const { pokemon, status } = usePokemon(pokemonItem.id)

    return (
        <>
            <Header
                backgroundColor={color}
                picture={pokemonItem.picture}
                name={pokemonItem.name}
                id={pokemonItem.id}
                types={pokemon?.about.types}
            />
            <View style={styles.tabsContainer}>
                {status === 'loading' ?
                    <ActivityIndicator color={RED_COLOR} size={30} /> :
                    <TabNavigator pokemon={pokemon} />
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    tabsContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    }
})
