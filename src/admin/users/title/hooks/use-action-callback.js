import { useCallback } from 'react'
import { useHistory } from 'react-router'

export const useActionCallback = () => {
  const history = useHistory()

  return useCallback(() => {
    history.push('/admin/users/add')
  }, [history])
}
