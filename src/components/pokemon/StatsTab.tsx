import React, { useContext } from 'react'
import { View, StyleSheet } from 'react-native';

import { Store } from '../../context/store';
import { Stat } from './Stat';

export const StatsTab = () => {
  const { state } = useContext(Store)
  const stats = state.pokemon.stats
  const total = stats.reduce((prev, curr) => prev + curr.base_stat, 0) || 0

  return (
    <View style={styles.container}>
      {
        stats.map(({ stat, base_stat }) => (
          <Stat
            key={stat.name}
            name={stat.name}
            baseStat={base_stat}
            percetange={150}
          />
        ))
      }
      <Stat name='Total' baseStat={total} percetange={1000} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25
  }
})