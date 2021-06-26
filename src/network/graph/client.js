import { ApolloClient, InMemoryCache } from '@apollo/client'

import { settings } from 'settings'

export const make = () => new ApolloClient({
  uri: settings().backend.graphUrl,
  cache: new InMemoryCache(),
})
