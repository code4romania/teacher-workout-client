import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles } from '@material-ui/core'

const makeXsStyles = theme => ({
  [theme.breakpoints.only('xs')]: {
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
  },
})

const makeSmStyles = theme => ({
  [theme.breakpoints.only('sm')]: {
    paddingLeft: theme.spacing(5),
    paddingRight: theme.spacing(5),
  },
})

const makeMdStyles = theme => ({
  [theme.breakpoints.only('md')]: {
    paddingLeft: theme.spacing(13),
    paddingRight: theme.spacing(13),
  },
})

const makeLgStyles = theme => ({
  [theme.breakpoints.only('lg')]: {
    paddingLeft: theme.spacing(17),
    paddingRight: theme.spacing(17),
  },
})

const makeXlStyles = theme => ({
  [theme.breakpoints.only('xl')]: {
    paddingLeft: '20vw',
    paddingRight: '20vw',
  },
})

const useStyles = makeStyles(theme => ({
  root: {
    ...makeXsStyles(theme),
    ...makeSmStyles(theme),
    ...makeMdStyles(theme),
    ...makeLgStyles(theme),
    ...makeXlStyles(theme),
  },
}))

export const Spacing = ({ children }) => <Box className={useStyles().root}>
  {children}
</Box>

Spacing.propTypes = { children: PropTypes.node.isRequired }
