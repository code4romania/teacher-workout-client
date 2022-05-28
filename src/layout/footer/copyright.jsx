import React from 'react'
import { makeStyles } from '@mui/styles'
import * as Material from '@mui/material'
import { Text } from 'layout/footer/common/text'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('md')]: {
      order: 3,
      paddingTop: theme.spacing(4),
    },
  },
}))

export const Copyright = () => <Material.Grid item xs={12} lg={5} className={useStyles().root}>
  <Text>
    © 2021 Code for Romania. Toate drepturile rezervate.
  </Text>
</Material.Grid>
