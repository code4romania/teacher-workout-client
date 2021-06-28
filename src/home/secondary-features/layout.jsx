import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'

export const Layout = ({ children }) => <Grid container justify={'center'} alignItems={'center'}>
  {children}
</Grid>

Layout.propTypes = { children: PropTypes.node.isRequired }
