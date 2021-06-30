import React from 'react'
import { List as MUIList } from '@material-ui/core'

import image1 from 'home/cards/b-card/image1.png'
import image2 from 'home/cards/b-card/image2.png'
import image3 from 'home/cards/b-card/image3.png'
import { ListItem } from 'home/cards/b-card/components/index'

const listContent = [
  {
    title: 'Acesta este un titlu de lectie',
    description: 'Aici este titlul categoriei lectiei',
    icon: image1,
  },
  {
    title: 'Acesta este un titlu de lectie',
    description: 'Aici este titlul categoriei lectiei',
    icon: image2,
  },
  {
    title: 'Acesta este un titlu de lectie foarte frumos cu un titlu lung',
    description: 'Aici este titlul categoriei lectiei',
    icon: image3,
  },
]

export const List = () => (
  <MUIList>
    {listContent.map((content, index) => (
      <ListItem content={content} key={index} />
    ))}
  </MUIList>
)
