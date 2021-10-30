import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@mui/material'

export const Description = props => (
  <Typography color={'textSecondary'}>{props.description}</Typography>
)

Description.propTypes = { description: PropTypes.string.isRequired }
