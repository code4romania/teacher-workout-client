import { Home } from 'home'
import { About } from 'about'
import { Terms } from 'terms'
import { Admin } from 'admin'
import { Lessons } from 'lessons'
import { Privacy } from 'privacy'

export const routesPath = {
  Home: '/',
  Lessons: '/lessons',
  TermsAndConditions: '/terms-and-conditions',
  PrivacyPolicy: '/privacy-policy',
  About: '/about',
  Contact: '/contact',
  Admin: {
    Index: '/admin',
    Users: '/admin/users',
    Categories: '/admin/categories',
    Lessons: '/admin/lessons',
  },
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
    path: routesPath.Lessons,
    Component: Lessons,
  },
  {
    path: routesPath.Admin.Index,
    Component: Admin.Dashboard,
  },
  {
    path: routesPath.Admin.Users,
    Component: Admin.Users,
  },
  {
    path: routesPath.Admin.Categories,
    Component: Admin.Categories,
  },
  {
    path: routesPath.Admin.Lessons,
    Component: Admin.Lessons,
  },
]
