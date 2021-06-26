import { useFetching } from 'settings/hooks/use-fetching'

export const Settings = ({ children }) => {
  const wereFetched = useFetching()

  return wereFetched ? children : 'Fetching settings...'
}

export { settings } from 'settings/fetching'
