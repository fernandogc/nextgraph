import { gql } from '@apollo/client'


export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int) {
    characters(page: $page) {
      info {
        next
        prev
        pages
      }
      results {
        id
        name
        species
        origin {
            name
        }
        location {
            name
        }
      }
    }
  }
`

export const GET_EPISODES = gql`
    query GetEpisodes($page: Int) {
        episodes(page: $page) {
            info {
                next
                prev
                pages
            }
            results {
                id
                name
                episode
                air_date
            }
        }
    }
`


export const GET_LOCATIONS = gql`
    query GetLocations($page: Int) {
        locations(page: $page) {
            info {
                next
                prev
                pages
            }
            results {
                id
                name
                type
                dimension
            }
        }
    }
`
