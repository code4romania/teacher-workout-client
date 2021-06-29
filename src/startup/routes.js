import { Home } from 'home'
import { TermsAndConditions } from 'termsAndConditions'
import { PrivacyPolicy } from 'footer/nav-buttons/privacy-policy'

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
    Component: PrivacyPolicy,
  },
]
