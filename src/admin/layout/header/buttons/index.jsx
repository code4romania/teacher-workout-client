import React from 'react'
import { routesPath } from 'startup/routes'
import { actions } from 'admin/layout/header/constants'
import { Layout } from 'admin/layout/header/buttons/layout'
import { Button } from 'admin/layout/header/buttons/button'

export const Buttons = () => <Layout>
  <Button to={routesPath.Admin.Index}>{actions.dashboard}</Button>
  <Button to={routesPath.Admin.Lessons}>{actions.lessons}</Button>
  <Button to={routesPath.Admin.Categories}>{actions.categories}</Button>
  <Button to={routesPath.Admin.Users}>{actions.users}</Button>
</Layout>

