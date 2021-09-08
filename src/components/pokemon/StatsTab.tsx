import React, { useContext } from 'react'
import { Text, View, StyleSheet } from 'react-native';
import { Store } from '../../context/store';

export const StatsTab = () => {
  const { state } = useContext(Store)
  const stats = state.pokemon.stats
  const total = stats.reduce((prev, curr) => prev + curr.base_stat, 0) || 0

  return (
    <View style={styles.container}>
      {
        stats.map(s => (
          <Stat key={s.stat.name} name={s.stat.name} baseStat={s.base_stat} percetange={150} />
        ))
      }
      <Stat name='Total' baseStat={total} percetange={1000} />
    </View>
  )
}

const Stat = ({ name, baseStat, percetange }: { name: string, baseStat: number, percetange: number }) => {
  const statisticName = (name: string) => {
    if (name === 'special-attack') {
      return 'Sp. Attack'
    }

    if (name === 'special-defense') {
      return 'Sp. Defense'
    }

    return name
  }

  return (
    <View style={styles.stat}>
      <Text style={styles.title}>{statisticName(name)}:</Text>
      <View style={styles.progressWrap}>
        <View style={{
          ...styles.progress,
          backgroundColor: (baseStat < 75) ? '#f44336' : '#4caf50',
          width: (baseStat * 100) / percetange + '%'
        }} />
      </View>
      <Text style={styles.statNumber}>{baseStat}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 25
  },
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13
  },
  title: {
    width: 90,
    color: '#999',
    textTransform: 'capitalize'
  },
  progressWrap: {
    flexGrow: 1,
    height: 5,
    backgroundColor: '#e0e0e0',
    overflow: 'hidden',
    borderRadius: 5
  },
  progress: {
    height: 5,
  },
  statNumber: {
    width: 35,
    textAlign: 'right'
  }
})