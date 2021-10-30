import React from 'react'
import { Core } from 'core'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({ root: { color: '#fff' } })

export const Primary = ({ children, to }) => {
  const classes = useStyles()

  return <Core.Buttons.Blue component={Link} to={to} variant={'contained'} className={classes.root}>
    {children}
  </Core.Buttons.Blue>
}

Primary.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]).isRequired,
  to: PropTypes.string.isRequired,
}

