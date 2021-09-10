import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';

import { Store } from '../../context/store';
import { NoDetailsFound } from './NoDetailsFound';
import { calculateHeight, calculateweight } from '../../utils/convertUnits';
import { colors } from '../../theme/colors';

export const AboutTab = () => {
  const { state } = useContext(Store)
  const about = state.pokemon.about

  if (!about) {
    return (
      <NoDetailsFound
        message='No information was found about this pokemon.'
      />
    )
  }

  const { feet, cm } = calculateHeight(about.height)
  const { lbs, kg } = calculateweight(about.weight)
  const abilities = about.abilities.map(({ ability }) => ability.name).join(', ')
  const eggGroups = about.egg_groups.map(({ name }) => name).join(', ')

  return (
    <View style={styles.container}>
      <Text style={styles.falvorText}>{about.flavorText}</Text>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Weight:</Text>
        <Text>{lbs} {kg}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Height:</Text>
        <Text>{feet} {cm}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Habitat:</Text>
        <Text style={styles.value}>{about.habitat?.name}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Abilities:</Text>
        <Text style={styles.value}>{abilities}</Text>
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.label}>Egg Groups:</Text>
        <Text style={styles.value}>{eggGroups}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25
  },
  falvorText: {
    marginBottom: 20
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 10,
  },
  label: {
    minWidth: 110,
    color: colors.gray
  },
  value: {
    textTransform: 'capitalize',
  }
})