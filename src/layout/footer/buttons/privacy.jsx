import React from 'react'
import { Link } from 'layout/common/link'
import { routesPath } from 'startup/routes'
import * as Material from '@material-ui/core'

export const Privacy = () => <Material.Box p={2}>
  <Link to={routesPath.PrivacyPolicy}>
    Politica de confidențialitate
  </Link>
</Material.Box>

