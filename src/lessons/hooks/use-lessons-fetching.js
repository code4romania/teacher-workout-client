import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { actions } from 'lessons/slices/get'

export const useLessonsFetching = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.attempt({}))
  }, [dispatch])
}
