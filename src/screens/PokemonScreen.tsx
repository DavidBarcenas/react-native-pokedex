import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { Image, Text, View } from 'react-native';
import { usePokemon } from '../hooks/usePokemon';

interface Props extends StackScreenProps<RootStackParams, 'Pokemon'> { }

export const PokemonScreen = ({ route }: Props) => {
    const { pokemonItem, color } = route.params
    const { pokemon } = usePokemon(pokemonItem.id)

    return (
        <View>
            <View style={{
                backgroundColor: color,
                width: '100%',
                position: 'relative',
                height: 350
            }}>
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
        </View>
    )
}
