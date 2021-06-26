import { useRestSetup } from 'network/hooks/use-rest-setup'
import { useGraphSetup } from 'network/hooks/use-graph-setup'

export const Network = ({ children }) => {
  const wasRestSetup = useRestSetup()
  const wasGraphSetup = useGraphSetup()

  return wasRestSetup && wasGraphSetup ? children : 'Setting up the network...'
}

export { rest } from 'network/rest'
export { graph } from 'network/graph'
