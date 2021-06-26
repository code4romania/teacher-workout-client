import React from 'react'
import { List as MUIList } from '@material-ui/core'
import { ListItem } from 'core/list/components'
import image1 from 'core/list/image1.png'
import image2 from 'core/list/image2.png'
import image3 from 'core/list/image3.png'

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
