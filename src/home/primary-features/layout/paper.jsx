import React from 'react'
import PropTypes from 'prop-types'
import { Box, makeStyles, Paper as MaterialPaper } from '@material-ui/core'

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
