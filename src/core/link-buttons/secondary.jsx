import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({ root: { textTransform: 'none' } })

export const Secondary = ({ children, to }) => {
  const classes = useStyles()

  return <Button component={Link} to={to} variant={'contained'} className={classes.root}>
    {children}
  </Button>
}

Secondary.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
}

