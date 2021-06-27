import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'

export const Description = props => (
  <Typography color={'textSecondary'}>{props.description}</Typography>
)

Description.propTypes = { description: PropTypes.string.isRequired }
