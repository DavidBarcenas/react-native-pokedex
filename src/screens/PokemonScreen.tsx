import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { Image, Text, View, StyleSheet } from 'react-native';
import { usePokemon } from '../hooks/usePokemon';
import LeftArrowIcon from '../assets/left-arrow.svg'
import FavoriteIcon from '../assets/favorite.svg'

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { }

export const PokemonScreen = ({ route }: Props) => {
    const { pokemonItem, color } = route.params
    const { pokemon } = usePokemon(pokemonItem.id)

    return (
        <View>
            <View style={{ ...styles.header, backgroundColor: color, }}>
                <View style={styles.square} />
                <View style={styles.icons}>
                    <LeftArrowIcon width={30} />
                    <FavoriteIcon width={30} />
                </View>
                <Image
                    source={{ uri: pokemonItem.picture }}
                    style={{
                        width: 350,
                        height: 350,
                        position: 'absolute',
                        bottom: -60,
                        right: 0,
                    }}
                />
                <Text style={{ color: '#fff', paddingLeft: 15, paddingTop: 30 }}>
                    <Text style={{ fontSize: 50, fontWeight: 'bold', textTransform: 'capitalize' }}>{pokemonItem.name}</Text>
                </Text>
            </View>

            <Text>
                {pokemon?.height}
            </Text>
        </View >
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        position: 'relative',
        height: 350
    },
    square: {
        position: 'absolute',
        top: -30,
        left: -50,
        backgroundColor: 'rgba(255,255,255,.2)',
        width: 150,
        height: 150,
        transform: [{ rotate: '60deg' }]
    },
    icons: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        minHeight: 50,
        paddingHorizontal: 20,
        marginVertical: 20,
        width: '100%',
    }
})
