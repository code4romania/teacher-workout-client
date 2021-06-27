import React from 'react'
import { Collapse, Hidden, List } from '@material-ui/core'

import { About } from 'header/mobile-options/about'
import { Lessons } from 'header/mobile-options/lessons'
import { Contact } from 'header/mobile-options/contact'
import { useVisibility } from 'header/mobile-options/hooks/use-visibility'

export const MobileOptions = () => <Collapse in={useVisibility()}>
  <Hidden mdUp>
    <List>
      <About />
      <Lessons />
      <Contact />
    </List>
  </Hidden>
</Collapse>
