import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokedexScreen } from '../screens/PokedexScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { PokemonListItem } from '../models/pokemonList';

export type RootStackParams = {
    Home: undefined;
    Pokedex: undefined;
    Pokemon: { pokemonItem: PokemonListItem, color: string }
}

declare global {
    namespace ReactNavigation {
        interface RootParamList extends RootStackParams { }
    }
}

const Stack = createStackNavigator<RootStackParams>();

export const StackNavigator = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
                cardStyle: {
                    backgroundColor: '#fff'
                }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pokedex" component={PokedexScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} />
        </Stack.Navigator>
    );
}
