import { Home } from 'home'
import { Course } from 'course'

export const routes = [
  {
    path: '/course',
    Component: Course,
  },
  {
    path: '/',
    Component: Home,
  },
]
