import React from 'react'
import { Collapse, Hidden, List, makeStyles } from '@material-ui/core'

import { About } from 'header/mobile-options/about'
import { Lessons } from 'header/mobile-options/lessons'
import { Contact } from 'header/mobile-options/contact'
import { useVisibility } from 'header/mobile-options/hooks/use-visibility'

const useStyles = makeStyles({ list: { backgroundColor: 'white' } })

export const MobileOptions = () => <Collapse in={useVisibility()}>
  <Hidden mdUp>
    <List className={useStyles().list}>
      <About />
      <Lessons />
      <Contact />
    </List>
  </Hidden>
</Collapse>
