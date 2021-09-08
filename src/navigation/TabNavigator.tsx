import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { AboutTab } from '../components/pokemon/AboutTab';
import { StatsTab } from '../components/pokemon/StatsTab';
import { EvolutionTab } from '../components/pokemon/EvolutionTab';
import { MovesTab } from '../components/pokemon/MovesTab';

import { colors } from '../theme/colors';

const Tab = createMaterialTopTabNavigator();

export const TabNavigator = () => {
  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: '#fff' }}
      screenOptions={{
        tabBarIndicatorStyle: { backgroundColor: colors.tabIndicator, },
        tabBarLabelStyle: { textTransform: 'capitalize' },
        tabBarStyle: { elevation: 1 },
      }}
    >
      <Tab.Screen name="About" component={AboutTab} />
      <Tab.Screen name="Base Stats" component={StatsTab} />
      <Tab.Screen name="Evolution" component={EvolutionTab} />
      <Tab.Screen name="Moves" component={MovesTab} />
    </Tab.Navigator>
  )
}
