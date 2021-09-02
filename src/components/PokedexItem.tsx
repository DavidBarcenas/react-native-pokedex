import React, { useCallback, useEffect, useRef, useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity, StyleSheet, Image, Animated } from 'react-native';

import { PokemonCustom } from '../types/pokemonList'
import { getImageColors } from '../utils/getColors'
import { Card } from './Card';

type Props = {
    item: PokemonCustom,
}
const DEFAULT_COLOR = '#f5f5f5'

const PokemonCard = ({ item }: Props) => {
    const [background, setBackground] = useState(DEFAULT_COLOR)
    const { picture, name, id } = item
    const { navigate } = useNavigation()
    const isMounted = useRef(true)

    const getPictureColors = useCallback(
        async () => {
            const [primary = DEFAULT_COLOR] = await getImageColors(picture)
            setBackground(primary)
        },
        [picture],
    )

    useEffect(() => {
        if (!isMounted.current) { return; }
        getPictureColors()

        return () => {
            isMounted.current = false
        }
    }, [])

    if (background === DEFAULT_COLOR) {
        return <Card id={id} name={name} pokeballColor='gray' />
    }

    return (
        <TouchableOpacity
            activeOpacity={0.9}
            onPress={() => navigate('Pokemon', {
                pokemonItem: item,
                color: background
            })}
        >
            <Card id={id} name={name} color='#fff' backgroundColor={background}>
                <Image source={{ uri: picture }} style={styles.img} />
            </Card>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    img: {
        width: 120,
        height: 120,
        position: 'absolute',
        bottom: -15,
        right: -10,
        zIndex: 1
    }
})

export const PokedexItem = React.memo(PokemonCard)