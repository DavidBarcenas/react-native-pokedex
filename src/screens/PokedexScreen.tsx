import React, { useMemo } from 'react'
import { ActivityIndicator, Image, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { PokemonCard } from '../components/PokemonCard';
import { usePokemonList } from '../hooks/usePokemonList';

export const PokedexScreen = () => {
    const { pokemonList, getPokemons, isLoading } = usePokemonList()
    // const renderItem = useMemo(() => PokemonCard, [pokemonList])

    return (
        <SafeAreaView>
            <Image
                source={require('../assets/pokeball.png')}
                style={{
                    width: 300,
                    height: 300,
                    position: 'absolute',
                    top: -100,
                    right: -100,
                    opacity: 0.15
                }}
            />


            <View>
                <FlatList
                    data={pokemonList}
                    keyExtractor={pokemon => pokemon.id}
                    renderItem={({ item }) => <PokemonCard item={item} />}
                    showsVerticalScrollIndicator={false}
                    onEndReached={getPokemons}
                    onEndReachedThreshold={0.4}
                    ListHeaderComponent={<Text style={{
                        fontSize: 35,
                        fontWeight: 'bold',
                        marginTop: 40,
                        marginBottom: 10,
                        marginLeft: 15
                    }}>Pokedex</Text>}
                    ListFooterComponent={<ActivityIndicator />}
                    numColumns={2}
                    columnWrapperStyle={{ justifyContent: 'space-evenly' }}
                />
            </View>
        </SafeAreaView>
    )
}
