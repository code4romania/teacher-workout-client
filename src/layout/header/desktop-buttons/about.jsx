import React from 'react'
import { Box } from '@material-ui/core'

import { Link } from 'layout/header/link'
import { actions } from 'layout/header/constants'

export const About = () => <Box marginX={3.5}>
  <Link>{actions.about}</Link>
</Box>
