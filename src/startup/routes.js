import { Home } from 'home'
import { About } from 'about'
import { Terms } from 'terms'
import { Lessons } from 'lessons'
import { Privacy } from 'privacy'

export const routesPath = {
  Home: '/',
  Lessons: '/lessons',
  TermsAndConditions: '/terms-and-conditions',
  PrivacyPolicy: '/privacy-policy',
  About: '/about',
  Contact: '/contact',
}

export const routes = [
  {
    path: routesPath.Home,
    Component: Home,
  },
  {
    path: routesPath.TermsAndConditions,
    Component: Terms,
  },
  {
    path: routesPath.PrivacyPolicy,
    Component: Privacy,
  },
  {
    path: routesPath.About,
    Component: About,
  },
  {
    path: '/lessons',
    Component: Lessons,
  },
]
