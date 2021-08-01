import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  navButtons: {
    order: 2,
    flexBasis: '50%',
    [theme.breakpoints.down('sm')]: { order: 2, flexBasis: '100%' },
  },
}))

export const Wrapper = ({ children }) => <Grid item className={useStyles().navButtons}>
  <Box pb={4} pt={2}>
    <Grid item container justify={'center'} alignItems={'center'}>
      {children}
    </Grid>
  </Box>
</Grid>

Wrapper.propTypes = { children: PropTypes.node.isRequired }
