import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@mui/material'
import { Link } from 'react-router-dom'

const useProperties = ({ to }) => ({
  component: Link,
  to,
  variant: 'contained',
  color: 'secondary',
})

export const Secondary = ({ children, to }) => <Button {...useProperties({ to })}>
  {children}
</Button>

Secondary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  to: PropTypes.string.isRequired,
}

