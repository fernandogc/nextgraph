import {gql} from '@apollo/client'

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

export const GET_EPISODE = gql`
    query GetEpisode($id: ID!) {
        episode(id: $id) {
            id
            name
            air_date
            episode
            characters {id name}
        }
    }
`
