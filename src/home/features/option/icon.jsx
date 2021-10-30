import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid } from '@mui/material'

export const Icon = props => (
  <Grid item xs={2} sm={1} md={1} lg={1} xl={1}>
    <Box pt={4}>
      <img src={props.icon} alt={'icon'} />
    </Box>
  </Grid>
)

Icon.propTypes = { icon: PropTypes.node.isRequired }
