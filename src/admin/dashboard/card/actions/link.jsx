import React from 'react'
import PropTypes from 'prop-types'
import * as Router from 'react-router-dom'
import * as Material from '@mui/material'
import { useStyles } from 'admin/dashboard/card/actions/hooks/use-styles'

export const Link = ({ link, text }) => <Material.Typography component={'p'} className={useStyles().link}>
  <Router.Link to={link}>
    {text}
  </Router.Link>
</Material.Typography>

Link.propTypes = {
  link: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
}
