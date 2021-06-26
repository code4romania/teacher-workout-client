import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { routes } from 'startup/routes'

export const Router = () => <BrowserRouter>
  <Switch>
    {routes.map(({ path, Component }) => <Route key={path} path={path}>
      <Component />
    </Route>)}
  </Switch>
</BrowserRouter>
