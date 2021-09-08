import React, { useContext } from 'react'
import { FlatList, Text } from 'react-native';
import { Store } from '../../context/store'

export const MovesTab = () => {
  const { state } = useContext(Store)
  const moves = state.pokemon.moves

  return (
    <FlatList
      data={moves}
      keyExtractor={({ move }) => move.name}
      renderItem={({ item, index }) => <Text style={{ width: '30%' }}>{item.move.name}</Text>}
      numColumns={3}
      columnWrapperStyle={{ justifyContent: 'space-between', alignItems: 'flex-start' }}
    />
  )
}
