import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AboutTab } from '../components/pokemon/AboutTab';
import { SearchScreen } from '../screens/SearchScreen';
import { PokemonState } from '../types/pokemon';
import { StatsTab } from '../components/pokemon/StatsTab';

type Props = {
  pokemon: PokemonState | null
}

const Tab = createMaterialTopTabNavigator();


export const TabNavigator = ({ pokemon }: Props) => {
  const AboutScreen = () => <AboutTab pokemon={pokemon} />
  const StatsScreen = () => <StatsTab pokemon={pokemon} />

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
      <Tab.Screen name="Base Stats" component={StatsScreen} />
      <Tab.Screen name="Evolution" component={SearchScreen} />
      <Tab.Screen name="Moves" component={SearchScreen} />
    </Tab.Navigator>
  )
}
