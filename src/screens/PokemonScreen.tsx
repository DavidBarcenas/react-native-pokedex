import React from 'react'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigation/StackNavigator';
import { Image, Text, View, StyleSheet } from 'react-native';
import { usePokemon } from '../hooks/usePokemon';
import { Header } from '../components/pokemon/Header';

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { SearchScreen } from './SearchScreen';

const Tab = createMaterialTopTabNavigator();

type Props = StackScreenProps<RootStackParams, 'Pokemon'>

export const PokemonScreen = ({ route }: Props) => {
    const { pokemonItem, color } = route.params
    const { pokemon } = usePokemon(pokemonItem.id)

    return (
        <>
            <Header
                backgroundColor={color}
                picture={pokemonItem.picture}
                name={pokemonItem.name}
                id={pokemonItem.id}
                types={pokemon?.types}
            />
            <View style={{
                width: '100%',
                flex: 1,
                paddingHorizontal: 20
            }}>
                <Tab.Navigator>
                    <Tab.Screen name="About" component={SearchScreen} />
                    <Tab.Screen name="Base Stats" component={SearchScreen} />
                    <Tab.Screen name="Evolution" component={SearchScreen} />
                    <Tab.Screen name="Moves" component={SearchScreen} />
                </Tab.Navigator>
            </View>
        </>
    )
}

const styles = StyleSheet.create({
})
