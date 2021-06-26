import { query } from 'network/graph/query'
import { mutate } from 'network/graph/mutate'
import * as client from 'network/graph/client'

let instance

export const setup = () => {
  const clientInstance = client.make()

  instance = ({
    mutate: mutate(clientInstance),
    query: query(clientInstance),
  })

  return instance
}

export const graph = () => {
  if (!instance) {
    throw new Error('It seems that graph client was not setup yet...')
  }

  return instance
}
