import { Home } from 'home'
import { Terms } from 'terms'
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
]
