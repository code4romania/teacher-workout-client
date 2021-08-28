import { Home } from 'home'
import { About } from 'about'
import { Terms } from 'terms'
import { Admin } from 'admin'
import { Lessons } from 'lessons'
import { Privacy } from 'privacy'
import { Users } from 'admin/users'
import { Categories } from 'admin/categories'

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
  },

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
  {
    path: routesPath.Admin.Index,
    Component: Admin,
  },

  {
    path: routesPath.Admin.Users,
    Component: Users,
  },
  {
    path: routesPath.Admin.Categories,
    Component: Categories,
  },
]
