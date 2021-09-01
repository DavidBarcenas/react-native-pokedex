import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePokemons } from '../hooks/usePokemons';
import { PokemonCard } from '../components/PokemonCard';
import { Pokeball } from '../components/Pokeball';

const RED_COLOR = '#fc6c6d'

export const PokedexScreen = () => {
    const { pokemons, fetchPokemons, status } = usePokemons()

    if (status === 'loading') {
        return (
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <ActivityIndicator color={RED_COLOR} size={30} />
            </View>
        )
    }

    if (status === 'error' || (status === 'success' && pokemons.length === 0)) {
        return (
            <View style={styles.withoutResults}>
                <Text style={styles.withoutResultText}>At this time there are no pokemons available.</Text>
                <Image style={styles.withoutResultImg} source={require('../assets/pokeball-white.png')} />
            </View>
        )
    }

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={pokemons}
                    keyExtractor={pokemon => pokemon.id}
                    renderItem={({ item }) => <PokemonCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    onEndReached={fetchPokemons}
                    onEndReachedThreshold={0.4}
                    ListHeaderComponent={
                        <View style={styles.titleContainer}>
                            <Pokeball size={180} position={-50} />
                            <Text style={styles.title}>Pokédex</Text>
                        </View>
                    }
                    ListFooterComponent={<ActivityIndicator />}
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    removeClippedSubviews
                    numColumns={2}
                />
            </View>
        </SafeAreaView>
    )

}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: RED_COLOR,
        height: 80,
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 20
    },
    title: {
        fontSize: 35,
        fontWeight: 'bold',
        marginLeft: 20,
        color: '#fff'
    },
    withoutResults: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: RED_COLOR,
    },
    withoutResultText: {
        fontSize: 25,
        width: '80%',
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    withoutResultImg: {
        width: 150,
        height: 150,
        opacity: 0.9
    }
})