import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './src/navigation/StackNavigator';
import { StateProvider } from './src/context/store';


const App = () => {
    return (
        <StateProvider>
            <NavigationContainer>
                <StackNavigator />
            </NavigationContainer>
        </StateProvider>
    )
}

export default App;
