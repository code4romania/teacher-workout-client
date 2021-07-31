import { get } from 'lodash'
import { useContext } from 'lessons/lesson/context'

export const useTitle = () => {
  const context = useContext()

  return get(context, 'lesson.title', '...')
}
