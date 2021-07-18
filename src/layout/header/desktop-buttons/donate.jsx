import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'

import { actions } from 'layout/header/constants'

const useStyles = makeStyles(theme => ({
  root: {
    background: theme.palette.success.main,
    color: 'white',
    '&:hover': { background: theme.palette.success.light },
  },
}))

export const Donate = () => <Box marginLeft={3}>
  <Button className={useStyles().root}>{actions.donate}</Button>
</Box>
