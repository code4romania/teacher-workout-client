import React from 'react'
import { makeStyles } from '@mui/styles'
import Source from 'layout/header/icon.png'

const useStyles = makeStyles({ root: { height: 50 } })

export const Icon = () => <img src={Source} className={useStyles().root} />
