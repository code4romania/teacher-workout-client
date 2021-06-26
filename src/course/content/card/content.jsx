import React from 'react'
import { CardContent, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

export const Content = ({ title, theme }) => <CardContent>
  <Typography gutterBottom variant={'h5'} component={'h2'}>
    {title}
  </Typography>
  <Typography variant={'body2'} color={'textSecondary'} component={'p'}>
    {theme.thumbnail.description}
  </Typography>
</CardContent>

Content.propTypes = {
  title: PropTypes.string.isRequired,
  theme: PropTypes.object.isRequired,
}
