import React, { useContext } from 'react'
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { Store } from '../../context/store'

export const MovesTab = () => {
  const { state } = useContext(Store)
  const moves = state.pokemon.moves

  return (
    <View style={styles.container}>
      <FlatList
        data={moves}
        keyExtractor={({ move }) => move.name}
        renderItem={({ item }) => <Text style={styles.item}>{item.move.name}</Text>}
        numColumns={3}
        columnWrapperStyle={styles.columns}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15
  },
  item: {
    width: '30%',
    textTransform: 'capitalize',
    paddingVertical: 3
  },
  columns: {
    justifyContent: 'space-between',
    alignItems: 'flex-start'
  }
})