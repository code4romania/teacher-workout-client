import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'
import { useContext } from 'admin/dashboard/card/context'

export const Layout = ({ children }) => <Material.Grid item {...useContext().size}>
  <Material.Box pb={3}>
    {children}
  </Material.Box>
</Material.Grid>

Layout.propTypes = { children: PropTypes.node.isRequired }
