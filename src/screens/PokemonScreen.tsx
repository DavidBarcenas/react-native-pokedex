import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { Image, Text, View, StyleSheet } from 'react-native';
import { usePokemon } from '../hooks/usePokemon';
import LeftArrowIcon from '../assets/left-arrow.svg'
import FavoriteIcon from '../assets/favorite.svg'
import DotsIcon from '../assets/dots.svg'

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { }

export const PokemonScreen = ({ route }: Props) => {
    const { pokemonItem, color } = route.params
    const { pokemon } = usePokemon(pokemonItem.id)

    console.log(pokemon)

    return (
        <View>
            <View style={{ ...styles.header, backgroundColor: color, }}>
                <DotsIcon width={150} style={{ position: 'absolute', top: -35, right: 60, opacity: 0.5 }} />
                <View style={styles.square} />
                <View style={styles.icons}>
                    <LeftArrowIcon width={30} />
                    <FavoriteIcon width={30} />
                </View>
                <View style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    position: 'absolute',
                    bottom: -60,
                    width: '100%'
                }}>
                    <Image
                        source={{ uri: pokemonItem.picture, }}
                        style={{
                            width: 280,
                            height: 280,

                        }}
                    />
                </View>
                <Text style={{ color: '#fff', paddingLeft: 15, }}>
                    <Text style={{ fontSize: 40, fontWeight: 'bold', textTransform: 'capitalize' }}>{pokemonItem.name}</Text>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', textTransform: 'capitalize' }}>{pokemonItem.id}</Text>
                </Text>
                <Text style={{ color: '#fff', paddingLeft: 15, }}>
                    <Text style={{ fontSize: 15, fontWeight: 'bold', textTransform: 'capitalize' }}>{pokemon?.types.map(t => t.type.name)}</Text>
                </Text>
            </View>
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
        backgroundColor: 'rgba(255,255,255,.15)',
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
