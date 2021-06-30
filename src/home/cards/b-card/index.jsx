import React from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Title, List as CustomList, Button } from 'home/cards/b-card/components'

const useStyles = makeStyles(theme => ({
  root: {
    paddingRight: theme.spacing(3),
    [theme.breakpoints.down('md')]: {
      paddingBottom: theme.spacing(7),
      paddingRight: theme.spacing(0),
    },
  },
}))

export const BCard = () => (
  <Box className={useStyles().root}>
    <Title />
    <CustomList />
    <Button />
  </Box>
)
