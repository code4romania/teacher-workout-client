import React from 'react'
import { Grid, makeStyles, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'

const useStyles = makeStyles(theme => ({
  title: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: 'normal',
    fontSize: 14,
    color: '#6B7280',
  },
  statistics: {
    fontFamily: theme.typography.fontFamily,
    fontWeight: '600',
    fontSize: 24,
    color: '#111827',
  },
}))

export const Body = ({ title, statistics }) => (
  <Grid container item xs={3} direction={'column'}>
    <Typography component={'h3'} className={useStyles().title}>
      {title}
    </Typography>
    <Typography variant={'body1'}
                component={'p'}
                className={useStyles().statistics}>
      {statistics}
    </Typography>
  </Grid>
)

Body.propTypes = {
  title: PropTypes.string.isRequired,
  statistics: PropTypes.string.isRequired,
}
