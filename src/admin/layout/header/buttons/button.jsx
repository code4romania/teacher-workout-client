import React from 'react'
import PropTypes from 'prop-types'
import * as Layout from 'admin/layout/button'
import * as Material from '@material-ui/core'
import { useNavigateCallback } from 'admin/layout/header/buttons/hooks/use-navigate-callback'

export const Button = ({ children, to }) => <Material.Grid item xs={12} sm={'auto'}>
  <Material.Box display={'flex'} justifyContent={'center'} py={1} px={1}>
    <Layout.Button onClick={useNavigateCallback(to)}>
      {children}
    </Layout.Button>
  </Material.Box>
</Material.Grid>

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
}
