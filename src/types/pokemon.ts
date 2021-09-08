export type Pokemon = {
    id: number
    name: string
    base_experience: number
    height: number
    is_default: boolean
    order: number
    weight: number
    abilities: Ability[]
    forms: SpeciesCustom[]
    game_indices: GameIndex[]
    held_items: HeldItem[]
    location_area_encounters: string
    moves: Move[]
    species: SpeciesCustom
    sprites: Sprites
    stats: Stat[]
    types: Type[]
}

export type Ability = {
    is_hidden: boolean
    slot: number
    ability: SpeciesCustom
}

export type SpeciesCustom = {
    name: string
    url: string
}

export type GameIndex = {
    game_index: number
    version: SpeciesCustom
}

export type HeldItem = {
    item: SpeciesCustom
    version_details: VersionDetail[]
}

export type VersionDetail = {
    rarity: number
    version: SpeciesCustom
}

export type Move = {
    move: SpeciesCustom
    version_group_details: VersionGroupDetail[]
}

export type VersionGroupDetail = {
    level_learned_at: number
    version_group: SpeciesCustom
    move_learn_method: SpeciesCustom
}

export type Sprites = {
    back_female: string
    back_shiny_female: string
    back_default: string
    front_female: string
    front_shiny_female: string
    back_shiny: string
    front_default: string
    front_shiny: string
    other: Other
    versions: Versions
}

export type Other = {
    dream_world: DreamWorld
    "official-artwork": DreamWorld
}

export type DreamWorld = {
}

export type Versions = {
    "generation-i": GenerationI
    "generation-ii": GenerationIi
    "generation-iii": GenerationIii
    "generation-iv": GenerationIv
    "generation-v": GenerationV
    "generation-vi": { [key: string]: DreamWorld }
    "generation-vii": GenerationVii
    "generation-viii": GenerationViii
}

export type GenerationI = {
    "red-blue": DreamWorld
    yellow: DreamWorld
}

export type GenerationIi = {
    crystal: DreamWorld
    gold: DreamWorld
    silver: DreamWorld
}

export type GenerationIii = {
    emerald: DreamWorld
    "firered-leafgreen": DreamWorld
    "ruby-sapphire": DreamWorld
}

export type GenerationIv = {
    "diamond-pearl": DreamWorld
    "heartgold-soulsilver": DreamWorld
    platinum: DreamWorld
}

export type GenerationV = {
    "black-white": DreamWorld
}

export type GenerationVii = {
    icons: DreamWorld
    "ultra-sun-ultra-moon": DreamWorld
}

export type GenerationViii = {
    icons: DreamWorld
}

export type Stat = {
    base_stat: number
    effort: number
    stat: SpeciesCustom
}

export type Type = {
    slot: number
    type: SpeciesCustom
}
