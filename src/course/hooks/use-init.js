import { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { actions } from 'course/slices/get'

export const useInit = () => {
  const dispatch = useDispatch()
  const { attempt } = actions

  useEffect(() => {
    dispatch(attempt())
  }, [attempt, dispatch])
}
