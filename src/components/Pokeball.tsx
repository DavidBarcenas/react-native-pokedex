import React from 'react'
import { Image, StyleSheet, View } from 'react-native';

type Props = {
  color?: 'white' | 'black'
  size?: number
  position?: number
}

export const Pokeball = ({ color = 'white', size = 300, position = -80 }: Props) => {
  const pokeballWhite = require('../assets/pokeball-white.png')
  const pokeballGray = require('../assets/pokeball.png')
  const pokeballSelected = color === 'white' ? pokeballWhite : pokeballGray

  return (
    <Image source={pokeballSelected} style={styles(size, position).img} />
  )
}

const styles = (size: number, position: number) => StyleSheet.create({
  img: {
    position: 'absolute',
    width: size,
    height: size,
    top: position,
    right: position,
    opacity: 0.15
  },
})