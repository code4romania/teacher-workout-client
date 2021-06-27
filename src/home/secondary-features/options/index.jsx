import React from 'react'
import { Grid } from '@material-ui/core'

import { Option } from 'home/feature-option'
import Icon0 from 'home/secondary-features/options/icon.0.svg'
import Icon1 from 'home/secondary-features/options/icon.1.svg'

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
]

export const Options = () => <Grid item container>
  {options.map(option => <Option {...option} key={option.title} />)}
</Grid>
