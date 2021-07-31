import React from 'react'
import { Collapse, Hidden, List, makeStyles } from '@material-ui/core'

import { About } from 'layout/header/mobile-options/about'
import { Lessons } from 'layout/header/mobile-options/lessons'
import { Contact } from 'layout/header/mobile-options/contact'
import { useVisibility } from 'layout/header/mobile-options/hooks/use-visibility'

const useStyles = makeStyles({ list: { backgroundColor: 'white', '& span': { textAlign: 'center' } } })

export const MobileOptions = () => (
  <Collapse in={useVisibility()}>
    <Hidden mdUp>
      <List className={useStyles().list}>
        <About />
        <Lessons />
        <Contact />
      </List>
    </Hidden>
  </Collapse>
)
