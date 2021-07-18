import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'green',
    color: 'white',
    marginLeft: 25,
    [theme.breakpoints.down('sm')]: { width: '100%' },
  },
  link: { [theme.breakpoints.down('sm')]: { textAlign: 'center', padding: '0.5rem' } },
}))

export const Donate = () => <Box className={useStyles().link}>
  <Button className={useStyles().root}>
    Doneaza
  </Button>
</Box>
