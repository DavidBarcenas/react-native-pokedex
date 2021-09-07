import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokedexScreen } from '../screens/PokedexScreen';
import { PokemonScreen } from '../screens/PokemonScreen';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonCustom } from '../types/pokemonList';

export type RootStackParams = {
    Home: undefined;
    Pokedex: undefined;
    Pokemon: { pokemonItem: PokemonCustom, color: string }
    Search: undefined
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
                cardStyle: { backgroundColor: '#fff' }
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Pokedex" component={PokedexScreen} />
            <Stack.Screen name="Pokemon" component={PokemonScreen} />
            <Stack.Screen name="Search" component={SearchScreen} />
        </Stack.Navigator>
    );
}
