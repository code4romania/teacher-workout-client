import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { routesPath } from 'startup/routes'

export const useActionCallback = () => {
  const navigate = useNavigate()

  return useCallback(() => {
    navigate(routesPath.Admin.AddUser)
  }, [navigate])
}
