import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AboutTab } from '../components/pokemon/AboutTab';
import { SearchScreen } from '../screens/SearchScreen';
import { Pokemon } from '../types/pokemon';

type Props = {
  pokemon: Pokemon | null
}

const Tab = createMaterialTopTabNavigator();


export const TabNavigator = ({ pokemon }: Props) => {
  const AboutScreen = () => <AboutTab pokemon={pokemon} />

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: '#fff' }}
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: '#ccc', },
        tabBarLabelStyle: { textTransform: 'capitalize' },
        tabBarStyle: { elevation: 1 },
      }}
    >
      <Tab.Screen name="About" component={AboutScreen} />
      <Tab.Screen name="Base Stats" component={SearchScreen} />
      <Tab.Screen name="Evolution" component={SearchScreen} />
      <Tab.Screen name="Moves" component={SearchScreen} />
    </Tab.Navigator>
  )
}
