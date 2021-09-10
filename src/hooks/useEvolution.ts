import { useContext, useEffect, useState } from "react"
import { Store } from "../context/store"

export type EvolutionProps = {
  name: string,
  level?: string
  picture: string | null
}

export const useEvolution = () => {
  const [evolutions, setEvolutions] = useState<EvolutionProps[]>([])
  const { state } = useContext(Store)
  const { pokemons, pokemon } = state

  const getEvolutions = () => {
    let evolutionChain = pokemon.evolution?.chain

    do {
      if (evolutionChain) {
        const details = evolutionChain['evolution_details'][0]
        
        let evolution: EvolutionProps = {
          name: evolutionChain.species.name,
          level: !details?.min_level ? '' : details.min_level.toString(),
          picture: pokemons.length ? pokemons.filter(x => x.name === evolutionChain?.species.name)[0]?.picture : null
        }
        
        setEvolutions(prevState => [...prevState, evolution])
        evolutionChain = evolutionChain['evolves_to'][0]
      }
    } while (!!evolutionChain && evolutionChain.hasOwnProperty('evolves_to'));
  }

  useEffect(() => {
    getEvolutions()
  }, [])
  
  return {evolutions}
}