import React from 'react'
import { makeStyles } from '@mui/styles'
import { Box, Hidden, Typography } from '@mui/material'

const CONTENT = `Aici ar fi un alt text care sa imputerniceasca ce zice 
textul de mai sus si sa complementeze call 
to action-ul pentru downloading-ul aplicatiei. pwp.`

const useStyles = makeStyles(theme => ({
  box: {
    alignContent: 'center',
    justifyContent: 'center',
    paddingBottom: theme.spacing(2),
    width: '80%',
  },
}))

export const Mobile = () => (
  <Hidden mdUp>
    <Box display={'flex'} justifyContent={'center'}>
      <Box className={useStyles().box}>
        <Typography align={'center'}>{CONTENT}</Typography>
      </Box>
    </Box>
  </Hidden>
)
