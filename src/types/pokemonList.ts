export type PokemonList = {
    count: number
    next: string
    previous: null
    results: Result[]
}

export type Result =  {
    name: string
    url: string
}

export type PokemonListItem = {
    id: string
    name: string
    picture: string
    color?: string
}