import React, { useContext, useEffect } from 'react'
import { Text, View, Image } from 'react-native';
import { PokemonState } from '../../types/pokemon';
import { pokeAPI } from '../../api/pokeapi';
import { Store } from '../../context/store';
import { ScrollView } from 'react-native-gesture-handler';

export const EvolutionTab = () => {
  const { state } = useContext(Store)
  const { pokemons, pokemon } = state

  let evolutions: any = []

  const extractEvolution = () => {
    let evoChain = pokemon.evolution?.chain

    do {
      if (evoChain) {
        const details = evoChain['evolution_details'][0]

        evolutions = [...evolutions, {
          name: evoChain.species.name,
          min_level: !details ? 1 : details.min_level,
          trigger_name: !details ? null : details.trigger.name,
          picture: pokemons.length ? pokemons.filter(x => x.name === evoChain?.species.name)[0].picture : null
        }]

        evoChain = evoChain['evolves_to'][0]
      }
    } while (!!evoChain && evoChain.hasOwnProperty('evolves_to'));
  }
  extractEvolution()

  if (evolutions === []) {
    return null
  }

  return (
    <ScrollView>
      {
        evolutions.map((e: any) => (
          <View key={e.name}>
            <Image source={{ uri: e.picture }} style={{ width: 250, height: 250 }} />
            <Text>{e.picture}</Text>
          </View>
        ))
      }
    </ScrollView>
  )
}
