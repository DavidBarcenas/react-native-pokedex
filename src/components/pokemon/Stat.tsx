import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../../theme/colors'

type StatProps = {
  name: string
  baseStat: number
  percetange: number
}

export const Stat = ({ name, baseStat, percetange }: StatProps) => {
  const statisticName = (name: string): string => {
    switch (name) {
      case 'special-attack':
        return 'Sp. Attack'
      case 'special-defense':
        return 'Sp. Defense'
      default:
        return name
    }
  }

  return (
    <View style={styles.stat}>
      <Text style={styles.title}>{statisticName(name)}:</Text>
      <View style={styles.progressWrap}>
        <View style={{
          ...styles.progress,
          backgroundColor: (baseStat < 75) ? colors.red : colors.green,
          width: (baseStat * 100) / percetange + '%'
        }} />
      </View>
      <Text style={styles.statNumber}>{baseStat}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  stat: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 13
  },
  title: {
    width: 90,
    color: colors.gray,
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