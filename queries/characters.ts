import {gql} from '@apollo/client'

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
                origin {name}
                location {name}
            }
        }
    }
`

export const GET_CHARACTER = gql`
    query GetCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            status
            species
            type
            gender
            origin {id name}
            location {id name}
            image
            episode {id name episode}
        }
    }
`
