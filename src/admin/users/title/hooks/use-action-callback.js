import { useCallback } from 'react'
import { useHistory } from 'react-router'
import { routesPath } from 'startup/routes'

export const useActionCallback = () => {
  const history = useHistory()

  return useCallback(() => {
    history.push(routesPath.Admin.AddUser)
  }, [history])
}
