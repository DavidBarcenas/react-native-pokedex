import React from 'react'
import { ActivityIndicator, Image, Text } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { SafeAreaView } from 'react-native-safe-area-context'
import { usePokemoList } from '../hooks/usePokemoList'

export const PokedexScreen = () => {
    const { pokemonList, getPokemons, isLoading } = usePokemoList()

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
            <Text style={{
                fontSize: 35,
                fontWeight: 'bold',
                marginLeft: 20,
                marginTop: 40
            }}>Pokedex</Text>

            <FlatList
                data={pokemonList}
                keyExtractor={pokemon => pokemon.id}
                renderItem={({ item }) => (
                    <>
                        <Image source={{ uri: item.picture }} style={{ width: 100, height: 80 }} />
                        <Text>{item.name}</Text>
                    </>
                )}
                showsVerticalScrollIndicator={false}
                onEndReached={getPokemons}
                onEndReachedThreshold={0.4}
                ListFooterComponent={<ActivityIndicator />}
            />
        </SafeAreaView>
    )
}
