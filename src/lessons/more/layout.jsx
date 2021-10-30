import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'

export const Layout = ({ children }) => <Material.Grid container justifyContent={'center'}>
  <Material.Grid item>
    <Material.Box pt={7}>
      {children}
    </Material.Box>
  </Material.Grid>
</Material.Grid>

Layout.propTypes = { children: PropTypes.node.isRequired }
