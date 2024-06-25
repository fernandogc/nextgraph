import {registerApolloClient} from '@apollo/experimental-nextjs-app-support'
import {ApolloClient, HttpLink, InMemoryCache, from} from '@apollo/client'
import { onError } from "@apollo/client/link/error"

const httpLink = new HttpLink({uri: 'https://rickandmortyapi.com/graphql'})
const errorLink = onError(({graphQLErrors, networkError}) => {
  if (graphQLErrors)
    graphQLErrors.map(({message, locations, path}) =>
      console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`))
  if (networkError) console.log(`[Network error]: ${networkError}`)
})

const {getClient} = registerApolloClient(() => new ApolloClient({
  link: from([errorLink, httpLink]),
  cache: new InMemoryCache()
}))

export default getClient
