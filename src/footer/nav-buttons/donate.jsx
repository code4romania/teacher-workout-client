import React from 'react'
import { Box, Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    background: 'green',
    color: 'white',
    marginLeft: 25,
    [theme.breakpoints.down('sm')]: { width: '100%', marginLeft: 0 },
  },
  link: { [theme.breakpoints.down('sm')]: { textAlign: 'center', flex: '1 100%', paddingBottom: 14, paddingTop: 42 } },
}))

export const Donate = () => <Box className={useStyles().link}>
  <Button className={useStyles().root}>
    Doneaza
  </Button>
</Box>
