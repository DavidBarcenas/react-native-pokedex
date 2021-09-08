import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { PokemonState } from '../../types/pokemon';
import { pokeAPI } from '../../api/pokeapi';

export const EvolutionTab = ({ pokemon }: { pokemon: PokemonState | null }) => {
  let evolutions: any = []

  const extractEvolution = () => {
    let evoChain = pokemon?.evolution.chain

    do {
      if (evoChain) {
        const details = evoChain['evolution_details'][0]

        evolutions = [...evolutions, {
          name: evoChain.species.name,
          min_level: !details ? 1 : details.min_level,
          trigger_name: !details ? null : details.trigger.name,
        }]

        evoChain = evoChain['evolves_to'][0]
      }
    } while (!!evoChain && evoChain.hasOwnProperty('evolves_to'));
  }
  extractEvolution()

  return (
    <View>
    </View>
  )
}
