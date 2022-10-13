import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@mui/material'

export const Layout = ({ children }) => (
  <Grid item container justifyContent={'flex-end'} alignItems={'center'}>
    <Grid item>
      {children}
    </Grid>
  </Grid>
);

Layout.propTypes = { children: PropTypes.node.isRequired }
