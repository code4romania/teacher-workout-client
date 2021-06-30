import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { About } from 'home/cards/b-card/about'
import { List as CustomList, Button } from 'home/cards/b-card/components'

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing(3),
    paddingTop: theme.spacing(10),
    [theme.breakpoints.down('md')]: { paddingRight: theme.spacing(0) },
  },
}))

export const BCard = () => (
  <Box className={useStyles().root}>
    <About />
    <CustomList />
    <Button />
  </Box>
)
