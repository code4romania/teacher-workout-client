import React from 'react'
import * as Material from '@material-ui/core'
import { useTitle } from 'lessons/lesson/hooks/use-title'

export const Title = () => <Material.Typography variant={'h6'}>
  <strong>
    {useTitle()}
  </strong>
</Material.Typography>
