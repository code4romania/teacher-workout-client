import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

export const Secondary = ({ children, to }) => <Button component={Link} to={to} variant={'contained'}>
  {children}
</Button>

Secondary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  to: PropTypes.string.isRequired,
}

