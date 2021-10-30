import React from 'react'
import * as Material from '@mui/material'
import { useContext } from 'admin/dashboard/card/context'
import { useStyles } from 'admin/dashboard/card/content/hooks/use-styles'

const useProperties = () => ({ variant: 'body1', component: 'p', className: useStyles().statistics })

export const Statistics = () => <Material.Typography {...useProperties()}>
  {
    useContext().statistics
  }
</Material.Typography>
