import React from 'react'
import * as Material from '@material-ui/core'
import { Content } from 'lessons/lesson/card/content'

export const Card = () => <Material.Card>
  <Material.CardMedia image={'https://via.placeholder.com/380x190'} component={'img'} />
  <Material.CardContent>
    <Content />
  </Material.CardContent>
</Material.Card>
