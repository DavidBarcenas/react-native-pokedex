import { Pokemon } from "./pokemon"
import { Species } from "./species"

export type StoreProps = {
  state: StateProps
  dispatch: React.Dispatch<ActionProps>
}

export type ProviderProps = {
  children: React.ReactNode
}

export type StateProps = {
  pokemon: {
    about: About
  }
}

export type About = 
  Pick<Species, 'egg_groups' | 'habitat'> & 
  Pick<Pokemon, 'weight' | 'height' | 'abilities'> 
  | null

export type ActionProps = 
  | {type: 'SET_ABOUT', payload: About}
