import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokedexScreen } from '../screens/PokedexScreen';

const Stack = createStackNavigator();

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
        </Stack.Navigator>
    );
}
