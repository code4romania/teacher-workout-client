import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@mui/styles'
import { Typography } from '@mui/material'

const useStyles = makeStyles({ root: { fontWeight: 700 } })

export const Title = props => (
  <Typography variant={'h6'} className={useStyles().root}>
    {props.title}
  </Typography>
)

Title.propTypes = { title: PropTypes.string.isRequired }
