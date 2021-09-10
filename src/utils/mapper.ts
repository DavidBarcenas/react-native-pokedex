import type { About } from "../types/context";
import type { Pokemon } from "../types/pokemon";
import type { Species } from "../types/species";

export const mapToAbout = (pokemon: Pokemon, species: Species): About => {
  return {
    abilities: pokemon.abilities,
    weight: pokemon.weight,
    height: pokemon.height,
    egg_groups: species.egg_groups,
    habitat: species.habitat,
    flavorText: 
      species.flavor_text_entries
        .filter(t => t.language.name === 'en')[0]
        ?.flavor_text.replace(/(\r\n|\n|\r)/gm, " ")
  }
}