import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'

export const Button = ({ children }) => <Grid item>
  <Box p={1.25}>
    <a href={'#'}>
      {children}
    </a>
  </Box>
</Grid>

Button.propTypes = { children: PropTypes.node.isRequired }
