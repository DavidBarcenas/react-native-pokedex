import React from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Pokemon, PokemonState } from '../../types/pokemon';

export const AboutTab = ({ pokemon }: { pokemon: PokemonState | null }) => {
  console.log('SE EJECUTAN LOS TABS')
  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Weight: </Text>
        <Text>{pokemon?.about.weight}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Height: </Text>
        <Text>{pokemon?.about.height}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Habitat: </Text>
        <Text>{pokemon?.species.habitat.name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Abilities: </Text>
        <Text>{pokemon?.about.abilities.map(t => t.ability.name + ', ')}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Egg Groups: </Text>
        <Text>{pokemon?.species.egg_groups.map(t => t.name)}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    minWidth: 100,
    color: '#999'
  }
})