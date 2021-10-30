import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

export const Layout = ({ children }) => <Grid container justifyContent={'center'}>
  <Grid item xs={12} sm={10} md={6} lg={6} xl={6}>
    {children}
  </Grid>
</Grid>

Layout.propTypes = { children: PropTypes.node.isRequired }
