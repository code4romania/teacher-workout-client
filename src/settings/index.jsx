import { useFetching } from 'settings/hooks/use-fetching'
import { useSettings } from 'settings/hooks/use-settings'

export const Settings = ({ children }) => {
  useFetching()

  return useSettings() ? children : 'Fetching settings...'
}

