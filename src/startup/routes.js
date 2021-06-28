import { Home } from 'home'
import { Course } from 'course'
import { Theme } from 'theme'

export const routes = [
  {
    path: '/course',
    Component: Course,
  },
  {
    path: '/theme',
    Component: Theme
  },
  {
    path: '/',
    Component: Home,
  },
]
