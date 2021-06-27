import React from 'react'
import { Box, Hidden, Typography } from '@material-ui/core'

const CONTENT = `Aici ar fi un alt text care sa imputerniceasca ce zice 
textul de mai sus si sa complementeze call 
to action-ul pentru downloading-ul aplicatiei. pwp.`

export const Mobile = () => <Hidden mdUp>
  <Box display={'flex'} justifyContent={'center'}>
    <Box alignContent={'center'} width={4 / 5} justifyContent={'center'} pb={2}>
      <Typography align={'center'}>
        {CONTENT}
      </Typography>
    </Box>
  </Box>
</Hidden>
