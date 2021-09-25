import React from 'react'
import PropTypes from 'prop-types'
import { Grid } from '@material-ui/core'
import { Spacing } from 'layout/common/spacing'

export const Layout = ({ children }) => <Spacing>
  <Grid container justify={'flex-start'} alignItems={'center'}>
    {children}
  </Grid>
</Spacing>

Layout.propTypes = { children: PropTypes.node.isRequired }
