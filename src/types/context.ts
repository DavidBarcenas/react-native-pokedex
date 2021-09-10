import type { PokemonCustom } from './pokemonList';
import type { Move, Pokemon, Stat } from "./pokemon"
import type { Species } from "./species"
import type { Evolution } from './evolution';

export type StoreProps = {
  state: StateProps
  dispatch: React.Dispatch<ActionProps>
}

export type ProviderProps = {
  children: React.ReactNode
}

export type StateProps = {
  pokemons: PokemonCustom[]
  pokemon: {
    about: About
    stats: Stat[]
    evolution: Evolution | null
    moves: Move[]
  }
}

export type About = {
  flavorText: string
} & Pick<Species, 'egg_groups' | 'habitat'> 
  & Pick<Pokemon, 'weight' | 'height' | 'abilities'> 
  | null

export type ActionProps = 
  | {type: 'SET_POKEMONS', payload: PokemonCustom[]}
  | {type: 'SET_ABOUT', payload: About}
  | {type: 'SET_STATS', payload: Stat[]}
  | {type: 'SET_EVOLUTION', payload: Evolution | null}
  | {type: 'SET_MOVES', payload: Move[]}
