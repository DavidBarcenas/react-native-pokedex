import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Store } from '../../context/store';

export const AboutTab = () => {
  const { state } = useContext(Store)
  const about = state.pokemon.about

  if (!about) {
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Weight: </Text>
        <Text>{about.weight}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Height: </Text>
        <Text>{about.height}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Habitat: </Text>
        <Text>{about.habitat.name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Abilities: </Text>
        <Text>{about.abilities.map(t => t.ability.name + ', ')}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Egg Groups: </Text>
        <Text>{about.egg_groups.map(t => t.name)}</Text>
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