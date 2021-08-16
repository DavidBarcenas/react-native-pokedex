export interface PokemonList {
    count: number;
    next: string;
    previous: null;
    results: Result[];
}

export interface Result {
    name: string;
    url: string;
}

export interface PokemonListItem {
    id: string;
    name: string;
    picture: string;
    color?: string
}