import React from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import { Image, Text, View } from 'react-native'
import { PokemonListItem } from '../models/pokemonList'

interface PokemonCardProps {
    item: PokemonListItem
}

const width = Dimensions.get('window').width

export const PokemonCard = ({ item }: PokemonCardProps) => {
    const { picture, name, id } = item

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { }}
        >
            <View style={{
                width: width * 0.42,
                borderRadius: 10,
                height: 120,
                position: 'relative',
                backgroundColor: 'tomato',
                paddingLeft: 10,
                paddingTop: 15,
                marginBottom: 20
            }}>
                <Text style={{ fontWeight: 'bold' }}>{name}</Text>
                <Text style={{ fontWeight: 'bold' }}>#{id}</Text>
                <View style={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    overflow: 'hidden',
                    width: 100,
                    height: 100,
                }}>
                    <Image
                        source={require('../assets/pokeball-white.png')}
                        style={{
                            width: 100,
                            height: 100,
                            opacity: 0.4,
                            top: -10,
                            right: -20
                        }}
                    />
                </View>
                <Image
                    source={{ uri: picture }}
                    style={{
                        width: 120,
                        height: 120,
                        position: 'absolute',
                        bottom: -15,
                        right: -10,
                        zIndex: 5
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}
