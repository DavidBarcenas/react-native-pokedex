import React from 'react'
import { Text, View, Image } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useEvolution } from '../../hooks/useEvolution';

export const EvolutionTab = () => {
  const { evolutions } = useEvolution()

  const hasNoEvolutions = evolutions.length <= 1
  const hasAnEvolution = evolutions.length == 2
  const hasTwoEvolution = evolutions.length >= 2

  if (hasNoEvolutions) {
    return null
  }

  return (
    <ScrollView>
      {
        evolutions.map((e: any) => (
          <View key={e.name}>
            <Image source={{ uri: e.picture }} style={{ width: 100, height: 100 }} />
            <Text>{e.name}</Text>
          </View>
        ))
      }
    </ScrollView>
  )
}
