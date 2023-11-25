import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { routes } from 'startup/routes'

export const Router = () => (
  <BrowserRouter>
    <Routes>
      {routes.map(({ path, Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  </BrowserRouter>
)
