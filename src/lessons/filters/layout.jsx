import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'

export const Layout = ({ children }) => <Box py={5}>
  <Grid container justify={'center'}>
    {children}
  </Grid>
</Box>

Layout.propTypes = { children: PropTypes.node.isRequired }
