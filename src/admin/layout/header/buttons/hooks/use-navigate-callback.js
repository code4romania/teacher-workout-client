import { useCallback } from 'react'
import { useHistory } from 'react-router'

export const useNavigateCallback = to => {
  const history = useHistory()

  return useCallback(() => {
    history.push(to)
  }, [history, to])
}
