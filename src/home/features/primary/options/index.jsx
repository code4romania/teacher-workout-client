import React from 'react'
import { Grid } from '@material-ui/core'

import { Option } from 'home/features/option'
import Icon0 from 'home/features/primary/options/icon.0.png'
import Icon1 from 'home/features/primary/options/icon.1.png'
import Icon2 from 'home/features/primary/options/icon.2.png'

const options = [
  {
    icon: Icon0,
    title: 'This is a title area',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
  },
  {
    icon: Icon1,
    title: 'This is another title area',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
  },
  {
    icon: Icon2,
    title: 'This is the thrid title area for this section',
    description: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
    Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.`,
  },
]

export const Options = () => (
  <Grid item container>
    {options.map(option => (
      <Option {...option} key={option.title} />
    ))}
  </Grid>
)
