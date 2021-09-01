import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePokemons } from '../hooks/usePokemons';
import { PokemonCard } from '../components/PokemonCard';
import { Pokeball } from '../components/Pokeball';

export const PokedexScreen = () => {
    const { pokemons, fetchPokemons, isLoading } = usePokemons()

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
                            <Text style={styles.title}>Pokedex</Text>
                        </View>
                    }
                    ListFooterComponent={<ActivityIndicator />}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                    removeClippedSubviews
                />
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        backgroundColor: '#fc6c6d',
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
    }
})