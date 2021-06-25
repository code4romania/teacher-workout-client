import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'settings/slices/settings'

export const useFetching = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.attempt())
  }, [dispatch])
}
