import React from 'react'
import PropTypes from 'prop-types'
import { Button as MaterialButton } from '@material-ui/core'
import { useStyles } from 'core/buttons/blue/hooks/use-styles'

const useProperties = props => ({
  ...props,
  variant: 'contained',
  color: 'primary',
  fullWidth: true,
  className: `${useStyles().button} ${props.className}`,
})

export const Blue = ({ children, ...rest }) => <MaterialButton {...useProperties(rest)}>
  {children}
</MaterialButton>

Blue.propTypes = { children: PropTypes.node.isRequired }
