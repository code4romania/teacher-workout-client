import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'

export const Layout = ({ children }) => <Material.Grid container justify={'center'}>
  <Material.Grid item>
    <Material.Box pt={7}>
      {children}
    </Material.Box>
  </Material.Grid>
</Material.Grid>

Layout.propTypes = { children: PropTypes.node.isRequired }
