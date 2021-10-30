import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { Box, Grid } from '@mui/material'

const useStyles = makeStyles(theme => ({
  box: {
    [theme.breakpoints.up('lg')]: {
      paddingRight: theme.spacing(0),
      paddingLeft: theme.spacing(0),
    },
  },
}))

export const Button = ({ children }) => <Grid item>
  <Box p={1.25} className={useStyles().box}>
    <a href={'#'}>
      {children}
    </a>
  </Box>
</Grid>

Button.propTypes = { children: PropTypes.node.isRequired }
