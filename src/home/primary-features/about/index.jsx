import React from 'react'
import { Box, makeStyles } from '@material-ui/core'

import { Title } from 'home/primary-features/about/title'
import { Description } from 'home/primary-features/about/description'

const useStyles = makeStyles(theme => ({
  root: {
    [theme.breakpoints.only('xs')]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
    },

    [theme.breakpoints.only('sm')]: { paddingRight: theme.spacing(0) },
    [theme.breakpoints.only('md')]: { paddingRight: theme.spacing(0) },
  },
}))

export const About = () => <Box className={useStyles().root}>
  <Title />
  <Description />
</Box>
