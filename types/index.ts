export type Info = {next: number; prev: number; pages: number}

export type Character = {id: number; name: string; species: string; origin: Location; location: {name: string}}
export type Characters = {info: Info; results: Character[]}
export type CharactersData = {characters: Characters}

export type Episode = {id: number; name: string; air_date: string; episode: string}
export type Episodes = {info: Info; results: Episode[]}
export type EpisodesData = {episodes: Episodes}

export type Location = {id: number; name: string; type: string; dimension: string}
export type Locations = {info: Info; results: Location[]}
export type LocationsData = {locations: Locations}
