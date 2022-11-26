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
    AddUser: '/admin/users/add',
    Profile: '/admin/profile',
    ProfileEdit: '/admin/profile/edit',
    Categories: '/admin/categories',
    AddCategory: '/admin/categories/new',
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
  {
    path: routesPath.Admin.AddCategory,
    Component: Admin.AddCategory,
  },
  {
    path: routesPath.Admin.AddUser,
    Component: Admin.AddUser,
  },
  {
    path: routesPath.Admin.Profile,
    Component: Admin.Profile,
  },
  {
    path: routesPath.Admin.ProfileEdit,
    Component: Admin.Profile,
  },
]
