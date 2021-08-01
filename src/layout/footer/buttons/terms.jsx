import React from 'react'
import { Link } from 'layout/common/link'
import { routesPath } from 'startup/routes'
import * as Material from '@material-ui/core'

export const Terms = () => <Material.Box p={2}>
  <Link to={routesPath.TermsAndConditions}>
    Termeni si conditii
  </Link>
</Material.Box>

