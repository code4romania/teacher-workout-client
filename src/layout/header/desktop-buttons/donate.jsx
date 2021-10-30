import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Button, Grid } from '@mui/material'
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

export const Donate = () => <Grid item>
  <Box display={'flex'} justifyContent={'center'} py={1} px={1}>
    <Button className={useStyles().button}>
      {actions.donate}
    </Button>
  </Box>
</Grid>
