import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

export const Layout = ({ children }) => <Grid container justify={'center'}>
  <Grid item xs={12} sm={10} md={6} lg={5} xl={5}>
    {children}
  </Grid>
</Grid>

Layout.propTypes = { children: PropTypes.node.isRequired }
