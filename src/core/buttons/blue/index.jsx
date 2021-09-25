import React from 'react'
import PropTypes from 'prop-types'
import { Button as MaterialButton } from '@material-ui/core'
import { useStyles } from 'core/buttons/blue/hooks/use-styles'

const useProperties = () => ({
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
  className: useStyles().button,
})

export const Blue = ({ children }) => <MaterialButton {...useProperties()}>
  {children}
</MaterialButton>

Blue.propTypes = { children: PropTypes.node.isRequired }
