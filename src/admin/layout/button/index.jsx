import React from 'react'
import PropTypes from 'prop-types'
import * as Material from '@material-ui/core'
import { useProperties } from 'admin/layout/button/hooks/use-properties'

export const Button = ({ children, onClick }) => <Material.Button {...useProperties({ onClick })}>
  {children}
</Material.Button>

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
}

Button.defaultProps = { onClick: () => ({}) }
