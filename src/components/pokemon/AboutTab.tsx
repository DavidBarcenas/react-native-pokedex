import React from 'react'
import { Text, View } from 'react-native';
import { Pokemon } from '../../types/pokemon';

export const AboutTab = ({ pokemon }: { pokemon: Pokemon | null }) => {
  return (
    <View>
      <Text>{pokemon?.height}</Text>
    </View>
  )
}
