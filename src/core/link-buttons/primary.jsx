import React from 'react'
import PropTypes from 'prop-types'
import { Core } from 'core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({ root: { textDecoration: 'none', color: '#000', textTransform: 'none' } })

export const Primary = ({ children, to }) => {
  const classes = useStyles()

  return <Core.Buttons.Blue component={Link} to={to} variant={'contained'} className={classes.root}>
    {children}
  </Core.Buttons.Blue>
}

Primary.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
}

