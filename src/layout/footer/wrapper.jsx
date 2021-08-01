import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@material-ui/core'

export const Wrapper = ({ children }) => <Box py={8}>
  <Grid container alignItems={'center'} justify={'space-between'}>
    {children}
  </Grid>
</Box>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
