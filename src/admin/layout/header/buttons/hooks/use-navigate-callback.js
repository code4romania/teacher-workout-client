import { useCallback } from 'react'
import { useNavigate } from 'react-router-dom';


export const useNavigateCallback = to => {
  const navigate = useNavigate();

  return useCallback(() => {
    navigate(to)
  }, [navigate, to])
}
