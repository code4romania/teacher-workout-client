import { Home } from 'home'
import { TermsAndConditions } from 'termsAndConditions'
import { Privacy } from 'privacy'

export const routes = [
  {
    path: '/',
    Component: Home,
  },
  {
    path: '/terms-and-conditions',
    Component: TermsAndConditions,
  },
  {
    path: '/privacy-policy',
    Component: Privacy,
  },
]
