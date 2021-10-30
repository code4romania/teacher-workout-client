import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { Box, Paper as MaterialPaper } from '@mui/material'

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(5),

    [theme.breakpoints.only('xs')]: {
      padding: theme.spacing(1),
      paddingTop: theme.spacing(5),
    },
  },
}))

export const Paper = ({ children }) => (
  <MaterialPaper>
    <Box className={useStyles().box}>{children}</Box>
  </MaterialPaper>
)

Paper.propTypes = { children: PropTypes.node.isRequired }
