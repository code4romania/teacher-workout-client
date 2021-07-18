import React from 'react'
import { Box, Container, Grid, makeStyles } from '@material-ui/core'

import { Icon } from 'header/icon'
import { Buttons } from 'header/buttons'

const useStyles = makeStyles({
  root: {
    height: 80,
    borderBottom: '1px solid #E5E7EB',
    background: 'white',
  },
})

const properties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

export const Bar = () => (
  <Box {...properties} className={useStyles().root}>
    <Container>
      <Grid container justify={'space-between'}>
        <Icon />
        <Buttons />
      </Grid>
    </Container>
  </Box>
)
