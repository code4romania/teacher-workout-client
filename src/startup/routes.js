import { Home } from 'home'
import { About } from 'about'
import { Terms } from 'terms'
import { Lessons } from 'lessons'
import { Privacy } from 'privacy'

export const routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/terms-and-conditions',
    Component: Terms,
  },
  {
    path: '/privacy-policy',
    Component: Privacy,
  },
  {
    path: '/about',
    Component: About,
  },
  {
    path: '/lessons',
    Component: Lessons,
  },
]
