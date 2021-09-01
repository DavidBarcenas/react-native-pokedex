import React from 'react'
import { ActivityIndicator, Image, StyleSheet, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePokemonList } from '../hooks/usePokemonList';
import { PokemonCard } from '../components/PokemonCard';
import { Pokeball } from '../components/Pokeball';

export const PokedexScreen = () => {
    const { pokemonList, getPokemons, isLoading } = usePokemonList()

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    data={pokemonList}
                    keyExtractor={pokemon => pokemon.id}
                    renderItem={({ item }) => <PokemonCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    onEndReached={getPokemons}
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