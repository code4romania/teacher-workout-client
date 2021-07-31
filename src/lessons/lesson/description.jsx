import React from 'react'
import * as Material from '@material-ui/core'
import { useDescription } from 'lessons/lesson/hooks/use-description'

export const Description = () => <Material.Typography variant={'body1'} color={'textSecondary'}>
  {
    useDescription()
  }
</Material.Typography>
