import React from 'react'
import { Box } from '@material-ui/core'

import { Link } from 'header/link'
import { actions } from 'header/constants'

export const Lessons = () => <Box marginX={3.5}>
  <Link>{actions.lessons}</Link>
</Box>
