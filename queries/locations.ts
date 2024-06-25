import {gql} from '@apollo/client'

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

export const GET_LOCATION = gql`
    query GetLocation($id: ID!) {
        location(id: $id) {
            id
            name
            type
            dimension
            residents {id name}
        }
    }
`
