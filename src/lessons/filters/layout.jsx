import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'

export const Layout = ({ children }) => <Box py={5}>
  <Grid container justifyContent={'center'}>
    {children}
  </Grid>
</Box>

Layout.propTypes = { children: PropTypes.node.isRequired }
