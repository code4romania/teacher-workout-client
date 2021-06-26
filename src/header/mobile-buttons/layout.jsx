import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Hidden } from '@material-ui/core'

export const Layout = ({ children }) => <Hidden mdUp>
  <Grid item container justify={'flex-end'} alignItems={'center'}>
    <Grid item>
      {children}
    </Grid>
  </Grid>
</Hidden>

Layout.propTypes = { children: PropTypes.node.isRequired }
