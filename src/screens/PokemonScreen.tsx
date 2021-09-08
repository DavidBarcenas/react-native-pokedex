import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { View, StyleSheet, Text, Image } from 'react-native';

import { usePokemon } from '../hooks/usePokemon';
import { RootStackParams } from '../navigation/StackNavigator';
import { TabNavigator } from '../navigation/TabNavigator';
import { Header } from '../components/pokemon/Header';
import { Spinner } from '../components/Spinner';

type Props = StackScreenProps<RootStackParams, 'Pokemon'>

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
                {status === 'loading' && <Spinner />}
                {status === 'error' && <NoDetailsFound />}
                {status === 'success' && <TabNavigator />}
            </View>
        </>
    )
}

const NoDetailsFound = () => (
    <View style={styles.notFound}>
        <Text style={styles.textNotFound}>
            No details found for this pokemon.
        </Text>
        <Image
            style={styles.imgNotFound}
            source={require('../assets/pokeball.png')}
        />
    </View>
)

const styles = StyleSheet.create({
    tabsContainer: {
        width: '100%',
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 10
    },
    notFound: {
        flex: 1,
        alignItems: 'center',
    },
    textNotFound: {
        fontSize: 22,
        color: '#bdbdbd',
        fontWeight: 'bold',
        marginVertical: 20
    },
    imgNotFound: {
        width: 150,
        height: 150,
        opacity: .2
    }
})
