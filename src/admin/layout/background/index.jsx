import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import BackgroundPattern from 'admin/layout/background/background-pattern.svg'

const useStyles = makeStyles({
  image: {
    position: 'absolute',
    zIndex: '-1',
  },
})

export const Background = () => <img src={BackgroundPattern} alt={'background pattern'} className={useStyles().image} />
