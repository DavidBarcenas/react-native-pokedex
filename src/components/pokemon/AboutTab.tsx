import React from 'react'
import { Text, View } from 'react-native';
import { Pokemon, PokemonState } from '../../types/pokemon';

export const AboutTab = ({ pokemon }: { pokemon: PokemonState | null }) => {
  return (
    <View>
      <Text>
        <Text>Weight: </Text>
        <Text>{pokemon?.about.weight}</Text>
      </Text>
      <Text>
        <Text>Height: </Text>
        <Text>{pokemon?.about.height}</Text>
      </Text>
      <Text>
        <Text>Abilities: </Text>
        <Text>{pokemon?.about.abilities.map(t => t.ability.name)}</Text>
      </Text>
    </View>
  )
}
