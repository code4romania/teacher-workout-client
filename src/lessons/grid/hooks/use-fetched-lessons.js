import { useSelector } from 'react-redux'

export const useFetchedLessons = () => useSelector(state => state.lessons.get.success)
