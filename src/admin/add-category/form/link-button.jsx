import React from 'react'
import PropTypes from 'prop-types'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  linkButton: { textTransform: 'none' },
  link: { textDecoration: 'none', color: '#000' },
})

export const LinkButton = ({ children, to }) => {
  const classes = useStyles()

  return <Button variant={'contained'} className={classes.linkButton}>
    <Link to={to} className={classes.link}>
      {children}
    </Link>
  </Button>
}

LinkButton.propTypes = {
  children: PropTypes.element.isRequired,
  to: PropTypes.string.isRequired,
}

