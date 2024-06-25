export type Info = {next: number; prev: number; pages: number}

type Character = {id: number; name: string; species: string; origin: Location; location: Location}
type Characters = {info: Info; results: Character[]}
export type CharactersData = {characters: Characters}

export type CharacterDetailData = {character: Character & {episode: Episode[]; image: string}}

type Episode = {id: number; name: string; air_date: string; episode: string}
type Episodes = {info: Info; results: Episode[]}
export type EpisodesData = {episodes: Episodes}

export type EpisodeData = {episode: Episode & {characters: Character[]}}

type Location = {id: number; name: string; type: string; dimension: string}
type Locations = {info: Info; results: Location[]}
export type LocationsData = {locations: Locations}

export type LocationData = {location: Location & {residents: Character[]}}