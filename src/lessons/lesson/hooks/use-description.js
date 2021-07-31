import { get } from 'lodash'
import { useContext } from 'lessons/lesson/context'

export const useDescription = () => {
  const context = useContext()

  return get(context, 'lesson.description', '...')
}
