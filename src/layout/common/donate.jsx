import React from 'react'
import { Box, Button, Grid, makeStyles } from '@material-ui/core'

import { actions } from 'layout/header/constants'

const useStyles = makeStyles(theme => ({
  button: {
    color: 'white',
    background: theme.palette.success.main,
    '&:hover': { background: theme.palette.success.light },
    width: '100%',

    [theme.breakpoints.only('sm')]: { width: '30%' },
  },
}))

export const Donate = () => <Grid item xs={12} sm={12} md={3} lg={3} xl={3}>
  <Box display={'flex'} justifyContent={'center'} py={1}>
    <Button className={useStyles().button}>
      {actions.donate}
    </Button>
  </Box>
</Grid>
