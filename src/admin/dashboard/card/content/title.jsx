import React from 'react'
import * as Material from '@material-ui/core'
import { useContext } from 'admin/dashboard/card/context'
import { useStyles } from 'admin/dashboard/card/content/hooks/use-styles'

export const Title = () => <Material.Typography component={'h3'} className={useStyles().title}>
  {useContext().title}
</Material.Typography>
