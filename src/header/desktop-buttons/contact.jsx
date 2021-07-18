import React from 'react'
import { Box } from '@material-ui/core'

import { Link } from 'header/link'
import { actions } from 'header/constants'

export const Contact = () => <Box marginX={3.5}>
  <Link>{actions.contact}</Link>
</Box>
