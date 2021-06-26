import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'header/slices/mobile'

export const useToggleCallbacks = () => {
  const dispatch = useDispatch()

  return useCallback(() => {
    dispatch(actions.toggle())
  }, [dispatch])
}
