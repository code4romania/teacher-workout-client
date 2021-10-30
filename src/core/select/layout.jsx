import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@mui/material'
import { Context, useValue } from 'core/select/context'

export const Layout = ({ children, options }) => <Context.Provider value={useValue({ options })}>
  <Material.FormControl fullWidth>
    {children}
  </Material.FormControl>
</Context.Provider>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  options: PropTypes.array.isRequired,
}
