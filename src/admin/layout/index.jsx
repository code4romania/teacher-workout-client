import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'
import { useStyles } from 'admin/layout/hooks/use-styles'

export const Layout = ({ children }) => <Material.Box className={useStyles().root}>
  {children}
</Material.Box>

Layout.propTypes = { children: PropTypes.node.isRequired }

