import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

export const Layout = ({ children }) => (
  <Grid container justifyContent={'center'} alignItems={'center'} columnSpacing={2.5}>
    {children}
  </Grid>
);

Layout.propTypes = { children: PropTypes.node.isRequired }
