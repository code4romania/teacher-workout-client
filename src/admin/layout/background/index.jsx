import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { ReactComponent as Svg } from 'admin/layout/background/background.svg'

const useStyles = makeStyles({
  image: {
    position: 'fixed',
    zIndex: '-1',
    bottom: 0,
    left: 0,
  },
})

export const Background = () => <Svg className={useStyles().image} />
