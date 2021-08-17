import React, { useEffect, useState } from 'react'
import { Dimensions, TouchableOpacity } from 'react-native'
import { Image, Text, View } from 'react-native'
import { PokemonListItem } from '../models/pokemonList'
import { getImageColors } from '../utils/getColors'

interface PokemonCardProps {
    item: PokemonListItem
}

const width = Dimensions.get('window').width

export const PokemonCard = ({ item }: PokemonCardProps) => {
    const [background, setBackground] = useState('#fff')
    const { picture, name, id } = item

    const getPokemonColors = async () => {
        const [primary = '#fff', secondary = '#ccc'] = await getImageColors(picture)
        setBackground(primary)
    }

    useEffect(() => {
        getPokemonColors()
    }, [])

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => { }}
        >
            <View style={{
                width: (width * 0.5) - 20,
                borderRadius: 10,
                height: 120,
                position: 'relative',
                backgroundColor: background,
                paddingLeft: 10,
                paddingTop: 15,
                marginBottom: 15,
            }}>
                <Text style={{
                    fontWeight: 'bold',
                    color: 'white',
                    textShadowColor: 'rgba(0, 0, 0, 0.5)',
                    textShadowOffset: { width: 0.5, height: 0.5 },
                    textShadowRadius: 10,
                }}>{name}</Text>
                <Text style={{ fontWeight: 'bold', color: 'white' }}>#{id}</Text>
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
                        zIndex: 10
                    }}
                />
            </View>
        </TouchableOpacity>
    )
}
