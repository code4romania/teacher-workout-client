import React from 'react'
import { makeStyles } from '@material-ui/core'

import Source from 'header/icon.png'

const useStyles = makeStyles({ root: { height: 50 } })

export const Icon = () => <img src={Source} className={useStyles().root} />
