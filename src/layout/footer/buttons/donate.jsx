import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Button } from '@mui/material'
import { actions } from 'layout/header/constants'

const useStyles = makeStyles(theme => ({
  root: {
    paddingLeft: theme.spacing(1),
    [theme.breakpoints.down('xs')]: { width: '100%' },
    [theme.breakpoints.only('sm')]: { width: '50%' },
    [theme.breakpoints.only('md')]: { width: '30%' },
    [theme.breakpoints.down('md')]: { paddingTop: theme.spacing(6) },
  },
  button: {
    color: 'white',
    background: theme.palette.success.main,
    '&:hover': { background: theme.palette.success.light },

    [theme.breakpoints.only('sm')]: { width: '100%' },
  },
}))

export const Donate = () => <Box display={'flex'} justifyContent={'center'} py={1} className={useStyles().root}>
  <Button className={useStyles().button} fullWidth>
    {actions.donate}
  </Button>
</Box>

