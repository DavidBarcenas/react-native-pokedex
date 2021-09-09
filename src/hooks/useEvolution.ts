import { useContext, useEffect, useState } from "react"
import { Store } from "../context/store"

type Evolution = {
  name: string,
  level: number
  picture: string | null
}

export const useEvolution = () => {
  const [evolutions, setEvolutions] = useState<Evolution[]>([])
  const { state } = useContext(Store)
  const { pokemons, pokemon } = state

  const getEvolutions = () => {
    let evolutionChain = pokemon.evolution?.chain

    do {
      if (evolutionChain) {
        const details = evolutionChain['evolution_details'][0]
        
        let evolution: Evolution = {
          name: evolutionChain.species.name,
          level: !details ? 1 : details.min_level,
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