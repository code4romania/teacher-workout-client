import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles({ root: { fontWeight: 700 } })

export const Title = props => (
  <Typography variant={'h6'} className={useStyles().root}>
    {props.title}
  </Typography>
)

Title.propTypes = { title: PropTypes.string.isRequired }
